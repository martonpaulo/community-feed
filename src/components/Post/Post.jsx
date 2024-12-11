import { TimeAgo } from "@/components/TimeAgo/TimeAgo";
import { Avatar } from "@/components/Avatar/Avatar";
import { Comment } from "@/components/Comment/Comment";

import styles from "./Post.module.css";
import { Content } from "@/components/Content/Content";
import { getUserById } from "@/data/users";
import { useState } from "react";
import { parseText } from "@/utils/textParser";

export function Post({ author, content, publishedAt, comments }) {
  const [commentList, setCommentList] = useState(comments);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCommentSubmit(event) {
    event.preventDefault();

    const newComment = {
      id: commentList.length + 1,
      authorId: 1,
      content: parseText(newCommentText),
      publishedAt: new Date(),
      applauses: 0,
    };

    setCommentList((commentList) => [...commentList, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar size={4} className={styles.avatarUrl} user={author} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <TimeAgo timestamp={publishedAt} />
      </header>

      <Content content={content} />

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea
          placeholder="Add a comment..."
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentList.length > 0 &&
          commentList
            .map((comment) => (
              <Comment
                key={comment.id}
                author={getUserById(comment.authorId)}
                content={comment.content}
                publishedAt={comment.publishedAt}
                applauses={comment.applauses}
              />
            ))
            .reverse()}
      </div>
    </article>
  );
}
