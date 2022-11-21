export const getCurrentWidth = (windowWidth) => {
  if (windowWidth >= 1280) {
    return 'xl';
  }

  if (windowWidth >= 1024) {
    return 'lg';
  }

  if (windowWidth >= 768) {
    return 'md';
  }

  return 'sm';
};

export const calculateNumItemsOnRow = (windowWidth) => {
  const size = getCurrentWidth(windowWidth);
  if (size === 'xl' || size === 'lg') {
    return 3;
  }

  if (size === 'md') {
    return 2;
  }

  return 1;
};
