import React from 'react';
import styles from './Content.module.css';
import type { FragmentType } from '../../types/fragmentType';

interface ContentProps {
  type?: 'post' | 'comment';
  content: FragmentType[][];
}

export function Content({ type = 'post', content }: ContentProps) {
  const getClassName = () => {
    const baseClass = styles.content;
    const typeClass = type === 'post' ? styles.post : styles.comment;
    return `${baseClass} ${typeClass}`.trim();
  };

  const renderFragment = (fragment: FragmentType, isLastFragment: boolean) => {
    const { type, value } = fragment;
    const fragmentMap: { [key: string]: JSX.Element } = {
      text: <span>{value}</span>,
      link: (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ),
      hashtag: <a href="#">{value}</a>,
      mention: <a href="#">{value}</a>,
    };

    return (
      <React.Fragment key={value}>
        {fragmentMap[type]}
        {!isLastFragment && <span> </span>}
      </React.Fragment>
    );
  };

  return (
    <>
      {content.map((line, lineIndex) => (
        <p className={getClassName()} key={lineIndex}>
          {line.map((fragment, fragIndex) =>
            renderFragment(fragment, fragIndex === line.length - 1),
          )}
        </p>
      ))}
    </>
  );
}
