const URL = "http://localhost:3000";

export const bookRestaurant = (restaurant: string) => {
  fetch(`${URL}/webhook-request`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      queryResult: {
        queryText: "End-user expression",
        parameters: {
          action: "book",
        },
      },
    }),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.json())))
    .then((data: string): string => {
      return data;
    })
    .catch((err: any) => {
      return "";
    });
};
