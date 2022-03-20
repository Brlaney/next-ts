export const headerVariant = {
  initial: {
    x: 200,
    opacity: 0,
    transition: { duration: 0.2 }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

export const boxVariant = {
  initial: {
    y: 150,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 1.8,
      ease: [0.2, 0.4, -0.3, 0.95],
      staggerChildren: 0.45
    }
  }
};

export const btnVariant = {
  initial: { y: 300, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  whileTap: { scale: 0.9 },
  whileHover: {
    zIndex: 1,
    scale: 1.06,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};
