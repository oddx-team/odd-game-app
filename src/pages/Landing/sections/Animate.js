import gsap from 'gsap'

export const easeTo = (elem, effects) => {
  gsap.to(elem.current, {
    ease: 'expo.easeInOut',
    duration: 2,
    ...effects
  })
}
