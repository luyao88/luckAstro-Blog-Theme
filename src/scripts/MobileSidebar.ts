// 初始化侧边栏
export default () => {
  const menuDOM: any = document.querySelector(
    '.vh-header>.main>nav>span.menu-btn'
  )
  const mobileSidebarDOM: any = document.querySelector('body>.vh-mobilesidebar')

  // 添加防抖功能，避免重复点击
  let isAnimating = false

  const addActive = () => {
    if (isAnimating) return
    isAnimating = true
    mobileSidebarDOM.classList.add('active')
    // 动画完成后重置状态
    setTimeout(() => {
      isAnimating = false
    }, 300)
  }

  const removeActive = (e: Event) => {
    // 只有点击遮罩层时才关闭侧边栏
    if (e.target === mobileSidebarDOM) {
      if (isAnimating) return
      isAnimating = true
      mobileSidebarDOM.classList.remove('active')
      // 动画完成后重置状态
      setTimeout(() => {
        isAnimating = false
      }, 300)
    }
  }

  menuDOM.addEventListener('click', addActive)
  mobileSidebarDOM.addEventListener('click', removeActive)
}
