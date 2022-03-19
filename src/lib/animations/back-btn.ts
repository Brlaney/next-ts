const easing = [0.88, -0.01, -0.05, 0.95];

export const containerVariant = {
  initial: { y: 0, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.66,
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const backBtnVariant = {
  initial: { y: 300, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: easing
    }
  },
  whileTap: { scale: 0.9 },
  whileHover: {
    // zIndex: 1,
    scale: 1.06,
    transition: { duration: 0.2, easing: easing }
  }
};
