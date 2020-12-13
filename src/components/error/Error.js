import React from "react";
import { Box, Heading, Button } from "grommet";

export default function Error() {
  return (
    <Box align="center" margin={{ top: "3vh" }}>
      <Heading>Whoops! This page doesn't exist! </Heading>
      <Button label="Click here to go home" href="/" />
    </Box>
  );
}
