import React from "react";
import { Anchor } from "grommet";

export default function Home() {
  return (
    <div>
      This is the homepage
      <Anchor href="/login" label="Login" />
    </div>
  );
}
