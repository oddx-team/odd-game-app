import gsap, { Elastic, Back } from 'gsap'
import utils from 'utils'

export const introAnimation = () => {
  // Intro effects
  gsap.to('.overlay .logo', { delay: 0.8, opacity: 0, y: -60 })
  gsap.to('.overlay', { delay: 1.35, duration: 0.7, top: '-100%', ease: 'expo.easeInOut' })
  gsap.from('.ellipse-container', { delay: 1.65, opacity: 0, duration: 0.7, ease: 'expo.easeInOut' })
  gsap.from('.card-1', { delay: 1.75, opacity: 0, duration: 0.7, ease: 'expo.easeInOut' })
  gsap.from('.card-2', { delay: 1.75, opacity: 0, duration: 0.7, ease: 'expo.easeInOut' })

  gsap.from('.nav .logo', { delay: 1.8, opacity: 0, y: -100, ease: 'expo.easeInOut' })
  gsap.from('.menu-links li', { delay: 2, opacity: 0, x: -100, stagger: 0.08 })
  gsap.from('.title', { duration: 0.4, delay: 2, opacity: 0, x: 200, ease: 'expo.easeInOut' })
  gsap.from('.subtitle', { duration: 0.35, delay: 2.1, opacity: 0, x: 200, ease: 'expo.easeInOut' })
  gsap.from('.playnow', { duration: 0.3, delay: 2.2, opacity: 0, x: 200, ease: 'expo.easeInOut' })
  gsap.from('.btn-video', { duration: 0.3, delay: 2.2, opacity: 0, y: -20, ease: 'expo.easeInOut' })
}

export const pulseAnimation = () => {
  const tl = gsap.timeline({ repeat: -1, delay: 0.5 })
  tl.to('.bubble', { duration: 0.4, scale: 0.8, rotation: 16, ease: Back.easeOut.config(1.7) })
  tl.to('.pulse', { duration: 0.5, scale: 0.86, opacity: 0.5, ease: 'back.easeOut' }, '-=0.4')
  tl.to('.bubble', { duration: 1.2, scale: 1, rotation: '-=16', ease: Elastic.easeOut.config(2.5, 0.5) })
  tl.to('.pulse', { duration: 1, scale: 2, opacity: 0, ease: 'expo.easeOut' }, '-=1.2')
}

export const startAnimation = async () => {
  gsap.to('.playnow', { x: '-0.5rem', duration: 0.3, ease: 'expo.easeInOut', skewX: 10 })
  gsap.to('.playnow', { x: '5rem', duration: 0.5, ease: 'expo.easeInOut', skewX: -5, delay: 0.3 })
  await utils.delay(800)
}

export const retryAnimation = () => {
  gsap.to('.playnow', { x: 0, duration: 0.5, ease: 'expo.easeInOut', delay: 0.3 })
}
