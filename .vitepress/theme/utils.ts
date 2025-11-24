import { OverlayScrollbars } from 'overlayscrollbars'

function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export function initOverlayScrollbars(target: HTMLElement | NodeListOf<HTMLElement> = document.body) {
  const nodes = target instanceof NodeList ? Array.from(target) : [target]
  nodes.forEach(el => OverlayScrollbars(el, {
    scrollbars: {
      theme: 'os-theme-light',
      visibility: isMobile() ? 'hidden' : 'visible',
    },
  }))
}
