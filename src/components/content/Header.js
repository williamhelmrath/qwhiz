import React from "react";
import { Header as GrommetHeader, Button } from "grommet";
import { Home, Globe, User, Add } from "grommet-icons";

export default function Header() {
  return (
    <GrommetHeader background="brand">
      <Button href="/feed" icon={<Home />} hoverIndicator />
      <Button href="/explore" icon={<Globe />} hoverIndicator />
      <Button href="/post" icon={<Add />} hoverIndicator />
      <Button href="/profile" icon={<User />} hoverIndicator />
    </GrommetHeader>
  );
}
