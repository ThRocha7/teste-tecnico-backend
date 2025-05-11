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

    //     test("Should return 422 for data with invalid length", async () => {
    //       const response = await fetch("http://localhost:3000/lead", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           zipcode_start: "fulano",
    //           zipcode_end: "fulanoemail.com",
    //         }),
    //       });

    //       const body = await response.text();
    //       expect(response.status).toBe(422);
    //       expect(body).toBe("Expected 9 characters for all parameters");
    //     });
  });

  test("Should return 201", async () => {
    const response = await fetch("http://localhost:3000/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "fulano",
        email: "fulano@email.com",
      }),
    });

    const body = await response.json();
    console.log(body);
    expect(response.status).toBe(201);
  });
});
