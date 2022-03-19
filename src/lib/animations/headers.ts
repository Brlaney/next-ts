export const headers = {
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

export const box = {
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
