import Cookies from "universal-cookie";
const cookies = new Cookies();
export const setCookies = (name, value) => {
  cookies.set(name, value);
};
export const getCookies = (name) => {
  return cookies.get(name);
};
export const deleteCookie = (name) => {
  return cookies.remove(name);
};
