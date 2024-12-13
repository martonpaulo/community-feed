import { HandsClapping, Trash } from "phosphor-react";
import { TimeAgo } from "../TimeAgo/TimeAgo";

import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { Content } from "../Content/Content";
import { useState } from "react";
import type { CommentType } from "../../types/commentType";
import type { UserType } from "../../types/userType";

interface CommentProps {
  commentData: CommentType;
  authorData: UserType;
  onDeleteComment: (commentId: number) => void;
}

export function Comment({
  commentData,
  authorData,
  onDeleteComment,
}: CommentProps) {
  const { id, content, publishedAt, applauses } = commentData;
  const authorName = authorData.name;

  const [applauseCount, setApplauseCount] = useState(applauses);

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  const handleApplause = () => {
    setApplauseCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar size={3} user={authorData} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{authorName}</strong>

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
