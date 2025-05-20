import { API_BASE, headers } from "../common/constants";

const fetchPayer = async () => {
  const res = await fetch(API_BASE + "days/payer", {
    method: "GET",
    headers: headers,
  });
  if (!res.ok) throw new Error("Failed to fetch payer");
  return res.json();
};

const advanceDay = async () => {
  const res = await fetch(API_BASE + "days/advanceDay", {
    method: "POST",
    headers: headers,
  });
  if (!res.ok) throw new Error("Failed to advance day");
  return res.json();
};

export { fetchPayer, advanceDay };
