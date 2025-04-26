import { useWindowDimensions } from "./useWindowDimention";

const useDeviceType = () => {
  const { width } = useWindowDimensions();

  let isDesktop = false,
    isTablet = false,
    isMobile = false;

  if (width >= 1024) {
    isDesktop = true;
  } else if (width >= 768) {
    isTablet = true;
  } else {
    isMobile = true;
  }

  return { isDesktop, isTablet, isMobile };
};

export { useDeviceType };
