export const buttonSlide = {
    initial: {
        y: "100%",
        transition: {duration: 0.6, ease: [0.76, 0, 0.24, 1]}
    },
    enter: {
        y:"0",
        transition: {duration: 0.6, ease: [0.76, 0, 0.24, 1]}},

}

export const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.4, ease: [0.61, 1, 0.88, 1],  delay: 0.095 * i}})
  }