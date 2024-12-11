import { HandsClapping, Trash } from "phosphor-react";
import { getUserById } from "../../data/users";
import { formatDate, timeAgo } from "../../utils/dateFormatter";

import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";

export function Comment({ data }) {
  const { authorId, content, timestamp, applauses } = data;
  const author = getUserById(authorId);

  return (
    <div className={styles.comment}>
      <Avatar size={3} user={author} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={formatDate(timestamp)} dateTime={timestamp}>
                <small>{timeAgo(timestamp)}</small>
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
        <footer>
          <button>
            <HandsClapping />
            Applause <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
