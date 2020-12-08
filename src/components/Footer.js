import React from "react";
import { Footer as GrommetFooter, Text, Anchor } from "grommet";

export default function Footer() {
  return (
    <GrommetFooter background="brand" pad="medium" margin={{ top: "20px" }}>
      <Text>Copyright</Text>
      <Anchor label="About" />
    </GrommetFooter>
  );
}
