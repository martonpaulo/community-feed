import { HandsClapping, Trash } from "phosphor-react";
import { TimeAgo } from "@/components/TimeAgo/TimeAgo";

import styles from "./Comment.module.css";
import { Avatar } from "@/components/Avatar/Avatar";
import { Content } from "@/components/Content/Content";

export function Comment({ author, content, publishedAt, applauses }) {
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

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <Content type="comment" content={content} />
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
