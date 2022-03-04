const easing = [0.2, 0.4, -0.3, 0.95];

export const fadeInUp = {
  initial: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 1,
      ease: easing
    }
  }
};

export const fadeInUp2 = {
  initial: {
    y: 200,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.33,
      duration: 1,
      ease: easing
    }
  }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.45
    }
  }
};
