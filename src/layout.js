export default () => {
  const docEl = document.documentElement
  const vmax = Math.max(window.screen.height, window.screen.width)
  const vmin = Math.min(window.screen.height, window.screen.width)

  // set data-dpr attribute
  const dpr = window.devicePixelRatio || 1
  docEl.setAttribute('data-dpr', `${dpr}`)

  // test if the current env meet the following two conditions:
  // 1. is iphonex
  // 2. is in aov app
  const isIphonexApp =
    vmin === 375 && vmax === 812 && window.devicePixelRatio === 3 && /(iphone)(?!.*safari)/gi.test(navigator.userAgent)
  docEl.setAttribute('data-is-iphonex-app', `${isIphonexApp}`)

  // set data-os attribute
  const u = navigator.userAgent
  if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    docEl.setAttribute('data-os', 'ios')
  } else if (u.indexOf('Android') >= 0 || u.indexOf('Adr') >= 0) {
    docEl.setAttribute('data-os', 'android')
  }

  // safe viewport dimention
  const safeAreaWidth = 88
  const vmaxSafe = isIphonexApp ? vmax - safeAreaWidth : vmax

  // set width-to-height ratio
  docEl.setAttribute('data-width-to-height-ratio', `${vmaxSafe / vmin}`)

  const baseWidth = 1470
  const baseHeight = 750
  const baseRatio = baseWidth / baseHeight

  // set size for root element
  function resetRoot () {
    const imax = Math.max(window.innerHeight, window.innerWidth)
    const imin = Math.min(window.innerHeight, window.innerWidth)
    const clientRatio = imax / imin
    // set root font size for rem
    let fontSize
    if (clientRatio > baseRatio) {
      fontSize = (imin / baseHeight) * 100
    } else {
      fontSize = (imax / baseWidth) * 100
    }
    docEl.style.fontSize = `${fontSize}px`
    docEl.style.height = `${imin}px`
    docEl.style.width = `${imax}px`
  }

  resetRoot()
  window.addEventListener('orientationchange', resetRoot)
  window.addEventListener('resize', resetRoot)
}
