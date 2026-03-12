export const authorize = (email, password) => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    resolve({
      data: { name: "Elise", email: "elise@example.com", _id: "fake-id" },
    });
  });
};
