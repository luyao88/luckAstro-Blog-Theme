let isSettingsOpen = false // 设置面板显示状态
let isSimpleChinese = true // 默认简体中文
let isFullScreen = false // 全屏状态
let isSidebarVisible = true // 侧栏显隐状态 (变量名更清晰)
// 滚动条高度变化事件======
const scrollChangeFn = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = window.innerHeight
  const percentage = (window.scrollY / (scrollHeight - clientHeight)) * 100

  // 是否在顶部
  const isAtTop = percentage <= 0

  // 获取默认显示的按钮（设置、全屏、返回顶部）
  const defaultButtons = document.querySelectorAll(
    '.vh-tools-group .vh-settings, .vh-tools-group .vh-zoom, .vh-tools-group .vh-back-top'
  )

  // 处理所有默认按钮的显示/隐藏
  defaultButtons.forEach((button) => {
    button.classList[isAtTop ? 'remove' : 'add']('active')
  })

  // 获取额外按钮（简繁切换、侧栏显隐、主题切换）
  const extraButtons = document.querySelectorAll(
    '.vh-tools-group .lang-switch, .vh-tools-group .sidebar-toggle, .vh-tools-group .theme-switch'
  )

  // 处理额外按钮的显示/隐藏 - 只在设置面板打开时处理
  if (isSettingsOpen) {
    extraButtons.forEach((button) => {
      // 只有当默认按钮显示时，额外按钮才能显示
      const shouldShow =
        !isAtTop && defaultButtons[0].classList.contains('active')
      button.classList.toggle('force-show', shouldShow)
    })
  }

  // 进度为不在范围内则返回
  if (percentage < 0 || percentage > 100) return

  // 更新圆环进度
  circle.style.strokeDashoffset =
    circumference - (percentage / 100) * circumference
}
// 简繁切换
const toggleLanguage = () => {
  isSimpleChinese = !isSimpleChinese
  localStorage.setItem('lang', isSimpleChinese ? 's' : 't')

  // 更新所有页面按钮
  document.querySelectorAll('.lang-switch .switch-text').forEach((el) => {
    el.textContent = isSimpleChinese ? '繁' : '簡'
  })

  // 执行简繁转换
  window.zh_tran(isSimpleChinese ? 's' : 't')
}
// 侧栏显隐
const toggleSidebar = () => {
  const aside = document.querySelector('.vh-aside')
  if (!aside) return

  isSidebarVisible = !isSidebarVisible
  localStorage.setItem('sidebarVisible', isSidebarVisible.toString())

  aside.classList.toggle('hidden', !isSidebarVisible)

  // 更新侧栏按钮状态
  const sidebarToggleBtn = document.querySelector('.sidebar-toggle')
  if (sidebarToggleBtn) {
    sidebarToggleBtn.setAttribute(
      'data-state',
      isSidebarVisible ? 'visible' : 'hidden'
    )
  }
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
  isSettingsOpen = !isSettingsOpen
  // 获取额外按钮
  const extraButtons = document.querySelectorAll(
    '.lang-switch, .sidebar-toggle, .theme-switch'
  )
  // 切换额外按钮的可见性
  extraButtons.forEach((button) => {
    button.classList.toggle('force-show', isSettingsOpen)
  })
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
  // 重置设置面板状态
  isSettingsOpen = false
  // 确保额外按钮初始状态为隐藏
  const extraButtons = document.querySelectorAll(
    '.lang-switch, .sidebar-toggle, .theme-switch'
  )
  extraButtons.forEach((button) => {
    button.classList.remove('force-show')
  })

  // 从localStorage恢复语言状态
  const savedLang = localStorage.getItem('lang')
  isSimpleChinese = savedLang ? savedLang === 's' : true

  // 设置按钮初始状态
  const langBtn = document.querySelector('.lang-switch .switch-text')
  if (langBtn) {
    langBtn.textContent = isSimpleChinese ? '繁' : '簡'
  }

  // 从localStorage恢复侧栏状态
  const savedSidebar = localStorage.getItem('sidebarVisible')
  isSidebarVisible = savedSidebar ? savedSidebar === 'true' : true

  // 应用侧栏状态
  const aside = document.querySelector('.vh-aside')
  if (aside) {
    aside.classList.toggle('hidden', !isSidebarVisible)
  }

  // 更新侧栏按钮状态
  const sidebarToggleBtn = document.querySelector('.sidebar-toggle')
  if (sidebarToggleBtn) {
    sidebarToggleBtn.setAttribute(
      'data-state',
      isSidebarVisible ? 'visible' : 'hidden'
    )
  }

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
  zoomBtn?.removeEventListener('click', toggleFullscreen)
  zoomBtn?.addEventListener('click', toggleFullscreen)

  // 添加设置按钮事件
  const settingsBtn = document.querySelector('.vh-settings')
  settingsBtn?.removeEventListener('click', toggleSettings)
  settingsBtn?.addEventListener('click', toggleSettings)

  // 添加简繁切换事件监听
  const langSwitchBtn = document.querySelector('.lang-switch')
  langSwitchBtn?.removeEventListener('click', toggleLanguage)
  langSwitchBtn?.addEventListener('click', toggleLanguage)

  // 添加侧栏显隐事件监听
  sidebarToggleBtn?.removeEventListener('click', toggleSidebar)
  sidebarToggleBtn?.addEventListener('click', toggleSidebar)
}
