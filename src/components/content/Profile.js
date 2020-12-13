import React from "react";
import { Button } from "grommet";
import firebase from "../../utils/firebase";

const auth = firebase.auth();

export default function Profile() {
  return (
    <div>
      This is you
      <Button href="/" label="Logout" onClick={() => auth.signOut()} />
    </div>
  );
}
