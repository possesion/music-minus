"use client";

import { useState } from "react";

interface WhoAmIButtonProps {
  whoAmIAction: () => Promise<string>;
}
export default function WhoAmIButton<WhoAmIButtonProps>({ whoAmIAction }) {
  const [name, setName] = useState();

  const handleSetName = async () => {
    setName(await whoAmIAction());
  };

  return (
    <div>
      <button onClick={handleSetName}>Who Am I?</button>
      {name && <div> You are {name}</div>}
    </div>
  );
}
