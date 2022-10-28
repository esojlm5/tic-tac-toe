const postGame = async (data = {}) => {
  const response = await fetch(`${process.env.apiGame}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

const getGame = async (id: string) => {
  const response = await fetch(`${process.env.apiGame}?partidaId=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export { postGame, getGame };
