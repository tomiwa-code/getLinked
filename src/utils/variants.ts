export const fadeIn = (para: string) => ({
  initial: {
    opacity: 0,
    y: para === "down" ? -60 : para === "up" ? 60 : 0,
    x: para === "right" ? 60 : para === "left" ? -60 : 0,
  },
  animate: (custom: number) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
});

export const timer = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const slideIn = (para: string, easeType: string) => ({
  initial: {
    x: para === "right" ? 60 : para === "left" ? -60 : 0,
    y: para === "top" ? -50 : para === "bottom" ? 50 : 0,
    opacity: 0,
  },
  animate: (custom: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 0.5,
      type: easeType === "spring" ? "spring" : "",
      ease: "easeInOut",
      stiffness: 300,
    },
  }),
});

export const globeRotate = {
  animate: {
    rotate: [0, 30, 0],
    transition: {
      delay: 2,
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const blink = {
  animate: (custom: number) => ({
    scale: [0.5, 0.8, 0.5],
    transition: {
      duration: custom * 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }),
};

export const staggerParent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const bounce = {
  animate: (custom: number) => ({
    y: [0, 10, 0],
    transition: {
      ease: "easeOut",
      duration: custom * 1,
      delay: 0.5,
      repeat: Infinity,
    },
  }),
};
