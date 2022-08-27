export const setLocal = () => {
  localStorage.setItem("auth", "true");
};

export const getLocal = (token) => {
  return localStorage.getItem("auth");
};
