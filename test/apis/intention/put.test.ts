import { putIntention } from "../../../src/utils/interfaces";

describe("PUT /intention/:intention_id", () => {
  describe("Testing if the middleware properly validates the datas", () => {
    test("should return 400 for missing a parameter", async () => {
      const intention_id = "1";
      const response = await fetch(
        `http://localhost:3000/intention/${intention_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      const body = await response.text();
      expect(response.status).toBe(400);
      expect(body).toBe("Missing required field");
    });

    test("Should return 422 for invalid paramater", async () => {
      const intention_id = "1a";
      const response = await fetch(
        `http://localhost:3000/intention/${intention_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lead_id: "1",
          }),
        }
      );

      const body = await response.text();
      expect(response.status).toBe(400);
      expect(body).toBe("The parameter intention_id is invalid");
    });

    test("Should return 422 for invalid lead_id", async () => {
      const intention_id = "1";
      const response = await fetch(
        `http://localhost:3000/intention/${intention_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lead_id: 1,
          }),
        }
      );

      const body = await response.text();
      expect(response.status).toBe(422);
      expect(body).toBe("The provided lead_id is invalid");
    });
  });

  test("Should return 200", async () => {
    const intention_id = "1";
    const bodyRequest = {
      lead_id: "1",
    };

    const response = await fetch(
      `http://localhost:3000/intention/${intention_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      }
    );

    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.message.lead_id.toString()).toBe(bodyRequest.lead_id);
  });
});
