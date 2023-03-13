import { MOBILE_SCREEN_VALUE } from "./consts";

export const isMobile = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth > MOBILE_SCREEN_VALUE) return false;
  return true;
};
