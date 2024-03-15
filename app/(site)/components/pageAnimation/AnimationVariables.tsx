export const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


export const pageShow = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};


export const mainImageShow = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const otherImagesShow = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
