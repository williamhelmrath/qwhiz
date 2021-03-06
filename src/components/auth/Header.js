import React from "react";
import { Header as GrommetHeader, Heading, Button } from "grommet";

export default function Header() {
  return (
    <div>
      <GrommetHeader background="brand" pad={{ horizontal: "1vw" }}>
        <Heading margin={{ vertical: "10px" }}>Qwhiz</Heading>
        <div>
          <Button href="/signup" label="Sign Up" margin={{ right: "2vw" }} />
          <Button href="/login" label="Log In" />
        </div>
      </GrommetHeader>
    </div>
  );
}
