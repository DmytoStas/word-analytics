import { useState } from "react";

import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CHAR, INSTAGRAM_MAX_CHAR } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    nubuerOfChar: text.length,
    instagramCharLeft: INSTAGRAM_MAX_CHAR - text.length,
    facebookCharLeft: FACEBOOK_MAX_CHAR - text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats {...stats} />
    </main>
  );
}
