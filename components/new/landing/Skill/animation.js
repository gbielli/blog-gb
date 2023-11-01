export const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.85, 0, 0.15, 1],  delay: 0.095 * i}})
  }