const postGame = async (data = {}) => {
  const response = await fetch(`${process.env.apiGame}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const getGame = async (id = 1) => {
  const response = await fetch(`${process.env.apiGame}`, {
    method: "GET",
    body: JSON.stringify(id),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

const hello = async () => {
  const response = await fetch("/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify("body hello"),
  });

  return response.json();
};
export { postGame, hello };
