export const host = "http://localhost:8080";

export const ava = (id) => {
  return host + "/avatars/" + id + ".jpg";
};

export const get = async (url) => {
  let res = await fetch(host + "/api/" + url, {
    credentials: "include",
  });
  if (res.ok) {
    return await res.json();
  } else {
    // Errors
  }
};

export const post = async (url, body) => {
  let res = await fetch(host + "/api/" + url, {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
  });
  if (res.ok) {
    return await res.json();
  } else {
    // Error handlers
  }
};
