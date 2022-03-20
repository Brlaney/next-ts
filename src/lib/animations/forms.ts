export const eqnVariant = {
  initial: { y: 0, x: -200, opacity: 0 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: [0.88, -0.01, 0.01, 0.99]
    }
  }
};

export const formVariant = {
  initial: { y: 0, x: 300, opacity: 0 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: [0.88, -0.01, -0.05, 0.95]
    }
  }
};

export const submitVariant = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.3,
      ease: [0.5, -0.01, 0.02, 0.99]
    }
  },
  whileTap: { scale: 0.9 },
  whileHover: {
    zIndex: 1,
    scale: 1.06,
    transition: {
      duration: 0.3,
      ease: [0.88, -0.01, -0.05, 0.95]
    }
  }
};
