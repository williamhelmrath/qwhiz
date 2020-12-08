import React from "react";
import { Header as GrommetHeader, Heading, Button } from "grommet";
export default function Home() {
  return (
    <div>
      <GrommetHeader background="brand">
        <Heading>Qwhiz</Heading>
        <div>
          <Button href="/signup" label="Sign Up" margin={{ right: "2vw" }} />
          <Button href="/login" label="Log In" />
        </div>
      </GrommetHeader>
      <Heading textAlign="center">
        This is the homepage for Qwhiz, a social media platform that promotes
        interaction through quizzes!
      </Heading>
    </div>
  );
}
