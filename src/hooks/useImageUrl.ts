const DefaultImage = require('@assets/images/logo.png');
export const useImageUrl = (url: string | null | undefined) => {
  if (!url) {
    return DefaultImage;
  }
  const size = '.800x600.';
  return {
    uri: `https://menu2.skyberry.kg/files/products/${url.replace('.', size)}`,
  };
};

export const useCategoryImageUrl = (url: string | null | undefined) => {
  if (!url) {
    return DefaultImage;
  }
  return {
    uri: `https://menu2.skyberry.kg/files/categories/${url}`,
  };
};
