test("Should return 201", async () => {
  const response = await fetch("http://localhost:3000/intention", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();
  console.log(body);
  expect(response.status).toBe(201);
});
