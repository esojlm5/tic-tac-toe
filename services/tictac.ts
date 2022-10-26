const postGame = async (data = {}) => {
  console.log("proces", `${process.env.apiGame}`);
  console.log(data);
  const response = await fetch(`${process.env.apiGame}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(response);
  // const result = await response.json();
  // console.log("result", result);
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
