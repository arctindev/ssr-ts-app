export const getChunkName = (locationURL: string) => {
  switch (locationURL) {
    case "/":
      return "home.js";
    case "/about":
      return "about.js";
    case "/404":
      return "404.js";
    case "/services":
      return "services.js";
    default:
      return undefined;
  }
};
