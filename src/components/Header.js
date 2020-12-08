import React from "react";
import { Header as GrommetHeader, Button } from "grommet";
import { Home, Globe, User } from "grommet-icons";

export default function Header() {
  return (
    <GrommetHeader background="brand">
      <Button href="/feed" icon={<Home />} hoverIndicator />
      <Button href="/explore" icon={<Globe />} hoverIndicator />
      <Button href="/profile" icon={<User />} hoverIndicator />
    </GrommetHeader>
  );
}
