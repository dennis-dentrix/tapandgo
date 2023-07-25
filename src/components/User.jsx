export const User = async (credentials) => {
  const data = await fetch("http://localhost:8080/register", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  return await data.json();
};
