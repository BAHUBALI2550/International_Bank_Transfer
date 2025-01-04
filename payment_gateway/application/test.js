import http from "k6/http";
import { sleep, group, check } from "k6";

export default function () {

  http.get("http://localhost:3000/createBank");

  sleep(1);
}

export const options = {
  stages: [
    { duration: "10s", target: 5 }, // Increase to 5 users in 10 seconds
    { duration: "20s", target: 10 }, // Increase to 10 users in next 20 seconds
    { duration: "30s", target: 20 }, // Increase to 20 users in next 30 seconds
    { duration: "40s", target: 0 }, // Throttle users in next 40 seconds
  ],
};