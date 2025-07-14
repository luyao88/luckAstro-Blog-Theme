import SITE_INFO from '@/config'
const { HomeBanner } = SITE_INFO

// 处理箭头点击滚动
const initArrowScroll = () => {
  const arrow = document.querySelector('.arrow-down')
  if (!arrow) return

  arrow.addEventListener('click', () => {
    // 获取视窗高度
    const viewportHeight = window.innerHeight
    // 获取当前滚动位置
    const currentScroll = window.scrollY
    // 计算下一个整屏位置
    const nextScreen =
      Math.ceil((currentScroll + 1) / viewportHeight) * viewportHeight

    window.scrollTo({
      top: nextScreen - 50, // 减去50px偏移量
      behavior: 'smooth',
    })
  })
}

// 处理导航事件
let vhNavigateHandler: ((event: CustomEvent) => void) | null = null

const handleNavigation = (event: CustomEvent) => {
  const url = new URL(event.detail, window.location.origin)
  const isHomePage = isHomePath(url.pathname)
  updateBackground(isHomePage)
}

const isHomePath = (path: string): boolean => {
  return path === '/' || path === '/index.html' || path.startsWith('/page/')
}

// 更新背景
const updateBackground = (isHome: boolean) => {
  const header = document.querySelector('.header-main')
  if (!header) return

  header.classList.toggle('bg-video', isHome)
  header.classList.toggle('bg-image', !isHome)

  // 更新视频元素
  if (isHome) {
    if (!header.querySelector('.video-bg')) {
      const video = document.createElement('video')
      video.className = 'video-bg'
      video.autoplay = true
      video.loop = true
      video.muted = true
      video.playsInline = true
      video.poster = `${HomeBanner.backgroundImg}`

      const source = document.createElement('source')
      source.src = `${HomeBanner.backgroundVideo}`
      source.type = 'video/mp4'

      video.appendChild(source)
      header.prepend(video)
    }
  } else {
    const video = header.querySelector('.video-bg')
    if (video) video.remove()
  }
}

// 初始化监听器
const initVhNavigate = () => {
  if (vhNavigateHandler) return
  vhNavigateHandler = handleNavigation.bind(null)
  window.addEventListener('vh-navigate', vhNavigateHandler as EventListener)
  // 在这里添加箭头滚动初始化
  initArrowScroll()
}

// 销毁监听器
const destroyVhNavigate = () => {
  if (vhNavigateHandler) {
    window.addEventListener('vh-navigate', vhNavigateHandler as EventListener)
    vhNavigateHandler = null
  }
}

// 导出方法供组件调用
export { initVhNavigate, destroyVhNavigate, updateBackground, initArrowScroll }
