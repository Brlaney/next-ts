const easing1 = [0.88, -0.01, -0.05, 0.95];
const easing2 = [0.5, -0.01, 0.02, 0.99];

// Equations container variant
export const variant1 = {
  initial: { x: -300, y: 0, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1.33, ease: easing1 }
  }
};

// Equations button variant
export const variant2 = {
  initial: { x: 0, y: 0, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.66,
      ease: easing2,
    }
  },
  whileTap: { scale: 0.98 },
  whileHover: {
    zIndex: 1,
    scale: 1.02,
    transition: { duration: 0.2, ease: easing1 }
  }
};

// Form container variant
export const variant3 = {
  initial: { x: 300, y: 0, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.33,
      duration: 1.33,
      bounce: 0.25,
      mass: 0.5
    }
  }
};

// Form input variant
export const variant4 = {
  initial: { x: 300, y: 0, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.66,
      ease: easing1,
      type: 'spring',
      bounce: 0.25,
      mass: 0.5,
      restDelta: 0.2
    }
  },
  exit: {
    x: -300,
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing1,
      type: 'spring',
      bounce: 0.25,
      mass: 0.5,
      restDelta: 0.2
    }
  }
};

// Form submit button variant
export const variant5 = {
  initial: { x: 0, y: 200, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.3,
      ease: easing2,
    }
  },
  whileHover: {
    zIndex: 1,
    scale: 1.03,
    transition: { duration: 0.3, ease: easing1, }
  },
  whileTap: { scale: 0.97 }
};

export const stgVariant = {
  animate: {
    opacity: 1, transition: {
      duration: 1.3,
      staggerChildren: 0.5
    }
  },
}
