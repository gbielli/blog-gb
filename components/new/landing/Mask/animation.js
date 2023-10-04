export const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.70, ease: [0.33, 1, 0.68, 1],  delay: 0.025 * i}})
  }