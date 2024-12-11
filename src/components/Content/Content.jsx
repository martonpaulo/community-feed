import React from "react";

import styles from "./Content.module.css";

export function Content({ type = "post", content }) {
  const getClassName = () => {
    const baseClass = styles.content;
    const typeClass =
      type === "post" ? styles.post : type === "comment" ? styles.comment : "";
    return `${baseClass} ${typeClass}`.trim();
  };

  const renderFragment = (fragment, fragIndex, numberOfFragments) => {
    const isLastFragment = fragIndex === numberOfFragments - 1;
    return (
      <React.Fragment key={fragIndex}>
        {fragment.type === "text" && <span>{fragment.value}</span>}
        {fragment.type === "link" && (
          <a href={fragment.value} target="_blank" rel="noopener noreferrer">
            {fragment.value}
          </a>
        )}
        {fragment.type === "hashtag" && <a href="#">{fragment.value}</a>}
        {fragment.type === "mention" && <a href="#">{fragment.value}</a>}
        {!isLastFragment && <span> </span>}
      </React.Fragment>
    );
  };

  return content.map((line, lineIndex) => (
    <p className={getClassName()} key={lineIndex}>
      {line.map((fragment, fragIndex) =>
        renderFragment(fragment, fragIndex, line.length)
      )}
    </p>
  ));
}
