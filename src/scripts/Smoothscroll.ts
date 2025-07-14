import SITE_INFO from '@/config'
// SmoothScroll 滚动优化
import { LoadScript } from '@/utils/index'
declare const SmoothScroll: any

export default async () => {
  await LoadScript('/assets/js/smoothscroll.min.js')
  SmoothScroll({ stepSize: 118, animationTime: SITE_INFO.ScrollSpeed })

  // MainHeader 的箭头点击平滑滚动
  document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector('.header-main .arrow-down')
    if (arrow) {
      arrow.addEventListener('click', () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        })
      })
    }
  })
}
