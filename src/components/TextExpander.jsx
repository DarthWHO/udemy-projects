import { useState } from "react";

function splitParagraph(text, num) {
  const words = text.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i] + " ";
    if ((i + 1) % num === 0 && i + 1 !== words.length) {
      return `${result.trim()}...`;
    }
  }
}

export default function TextExpander({
  collapsedNumWords = 30,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#007bff",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  let displayText;
  if (isExpanded) {
    displayText = children;
  } else {
    displayText = splitParagraph(children, collapsedNumWords);
  }

  return (
    <div className={`${className}`}>
      <span>{displayText}</span>
      <button
        style={{
          color: buttonColor,
          border: "none",
          background: "none",
          cursor: "pointer",
          marginLeft: "8px",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
