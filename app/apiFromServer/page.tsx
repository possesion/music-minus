import { headers } from "next/headers";
import React from "react";

export default async function APIFromServer() {
  const result = await fetch("http://localhost:3000/api/whoAmI", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div>
      <div>
        API Route from: <span className="font-bold underline">Server</span>
      </div>
      <div>Name: {result?.name}</div>
    </div>
  );
}
