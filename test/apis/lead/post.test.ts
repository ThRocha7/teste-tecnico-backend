describe("POST /lead", () => {
  describe("Testing if the middleware properly validates the data", () => {
    test("should return 400 for missing a parameter", async () => {
      const response = await fetch("http://localhost:3000/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "fulano",
        }),
      });

      const body = await response.text();
      expect(response.status).toBe(400);
      expect(body).toBe("Missing required field");
    });

    test("Should return 400 for invalid data type", async () => {
      const response = await fetch("http://localhost:3000/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: 1,
          email: "fulano@emal.com",
        }),
      });

      const body = await response.text();
      expect(response.status).toBe(400);
      expect(body).toBe("The data type is invalid");
    });
  });

  test("Should return 201", async () => {
    const response = await fetch("http://localhost:3000/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "fulano",
        email: "thiagojimis007@gmail.com",
      }),
    });

    const body = await response.json();
    expect(response.status).toBe(201);
    expect(body.message.sent_email).toBe(true);
  });
});
