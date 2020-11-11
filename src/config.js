export const host = "http://localhost:8080";

export const get = async (url) => {
  let res = await fetch(host + "/api" + url, {
    credentials: "include",
  });
  return await res.json();
};
