import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("No scripts tag allowed!");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />

      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
