export const chartVariant = {
  initial: { y: 0, x: 300, opacity: 0 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.66,
      ease: [0.88, -0.01, -0.05, 0.95]
    }
  },
  exit: {
    y: 0,
    x: -300,
    opacity: 0,
    transition: {
      duration: 1.66,
      ease: [0.1, 0.05, -0.01, 0.9]
    }
  }
};
