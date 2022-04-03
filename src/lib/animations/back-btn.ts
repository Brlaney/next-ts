export const containerVariant = {
  initial: { y: 0, x: 0, opacity: 0 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.2, -0.05, 0.01, 0.9]
    }
  }
};

const easing = [0.3, 0.1, 0.01, 0.85];

export const backBtnVariant = {
  initial: { y: 0, x: -100, opacity: 0 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    delay: 0.4,
    transition: {
      duration: 0.75,
      ease: easing
    }
  },
  whileTap: { scale: 0.9 },
  whileHover: {
    zIndex: 1,
    scale: 1.06,
    delay: 0.8,
    transition: { duration: 0.2, easing: easing }
  }
};
