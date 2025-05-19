//normally we'd use the env variables so that multi-environment (dev, test, prod) etc get built properly but for the sake of this example, we'll hardcode them
export const API_BASE = "http://localhost:3001/api/";
export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};
