// 滚动条高度变化事件======
const scrollChangeFn = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = window.innerHeight
  const percentage = (window.scrollY / (scrollHeight - clientHeight)) * 100

  // 获取所有工具按钮
  const toolButtons = document.querySelectorAll('.vh-tools-group section')

  // 统一处理所有按钮的显示/隐藏
  toolButtons.forEach((button) => {
    button.classList[percentage <= 0 ? 'remove' : 'add']('active')
  })
  // 进度为 不在范围内
  if (percentage < 0 || percentage > 100) return
  // 进度不为 0
  circle.style.strokeDashoffset =
    circumference - (percentage / 100) * circumference
}

// 缩放功能
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 设置面板功能
const toggleSettings = () => {
  // 这里添加设置面板的显示/隐藏逻辑
  console.log('Toggle settings panel')
}

// 返回顶部事件
const backTopFn = () => {
  ;(window as any).vhlenis && (window as any).vhlenis.stop()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  ;(window as any).vhlenis && (window as any).vhlenis.start()
}

// 页面更新，初始化函数======
// 回顶部DOM
let backTop: any = document.querySelector('.vh-back-top')
// 彩虹圈圈 DOM
let circle: any = document.querySelector('.vh-back-top>svg>circle')
const circumference = 2 * Math.PI * 10

//  初始化
export default () => {
  // 更新 彩虹圈圈 DOM
  circle = document.querySelector('.vh-back-top>svg>circle')
  // 更新 回顶部DOM
  backTop = document.querySelector('.vh-back-top')
  // BackTop 圈圈初始化
  circle.style.strokeDasharray = circumference
  circle.style.strokeDashoffset = circumference
  // 移除并添加BackTop 事件======
  backTop.removeEventListener('click', backTopFn)
  backTop.addEventListener('click', backTopFn)
  // 移除并添加BackTop 事件======
  // 移除并添加ScrollChange 事件======
  window.removeEventListener('scroll', scrollChangeFn)
  window.addEventListener('scroll', scrollChangeFn)
  // 移除并添加ScrollChange 事件======
  // 触发 scrollChangeFn
  scrollChangeFn()

  // 添加缩放按钮事件
  const zoomBtn = document.querySelector('.vh-zoom')
  zoomBtn?.addEventListener('click', toggleFullscreen)

  // 添加设置按钮事件
  const settingsBtn = document.querySelector('.vh-settings')
  settingsBtn?.addEventListener('click', toggleSettings)
}
