import { HandsClapping, Trash } from "phosphor-react";
import { TimeAgo } from "@/components/TimeAgo/TimeAgo";

import styles from "./Comment.module.css";
import { Avatar } from "@/components/Avatar/Avatar";
import { Content } from "@/components/Content/Content";
import { useState } from "react";

export function Comment({
  id,
  author,
  content,
  publishedAt,
  applauses,
  onDeleteComment,
}) {
  const [applauseCount, setApplauseCount] = useState(applauses);

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  const handleApplause = () => {
    setApplauseCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar size={3} user={author} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>

              <TimeAgo timestamp={publishedAt} />
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <Content type="comment" content={content} />
        </div>
        <footer>
          <button onClick={handleApplause}>
            <HandsClapping />
            Applause <span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
