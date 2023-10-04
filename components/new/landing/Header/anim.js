const transition = {duration: 0.7, ease: [0.76, 0, 0.24, 1]}


export const menuSlide = {
    initial: {y: "calc(-100% - 100px)"},
    enter: {y: "0", transition},
    exit: {y: "calc(-100% - 100px)", transition}
}

export const buttonSlide = {
    initial: {
        y: "-80px",
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
    },
    enter: {
        y:"0",
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}},
}


export const translate = {
  initial: {
      y: "100%",
      opacity: 0
  },
  enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0]}
  }),
  exit: (i) => ({
      y: "100%",
      opacity: 0,
      transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[1]}
  })
}

export const blur = {
  initial: {
      filter: "blur(0px)",
      opacity: 1
  },
  open: {
      filter: "blur(2px)",
      opacity: 0.6,
      transition: {duration: 0.2}
  },
  closed: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {duration: 0.2}

  }
}