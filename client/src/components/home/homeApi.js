import { API_BASE, headers } from "../common/constants";

const whoPays = async () => {
  const res = await fetch(API_BASE + "employees/whoPays", {
    method: "GET",
    headers: headers,
  });
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};

const advanceDay = async () => {
  const res = await fetch(API_BASE + "employees/advanceDay", {
    method: "POST",
    headers: headers,
  });
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};
