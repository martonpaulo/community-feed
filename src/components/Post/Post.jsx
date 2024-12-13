import { useState } from "react";
import { TimeAgo } from "@/components/TimeAgo/TimeAgo";
import { Avatar } from "@/components/Avatar/Avatar";
import { Comment } from "@/components/Comment/Comment";
import { Content } from "@/components/Content/Content";
import { getUserById } from "@/data/users";
import { parseText } from "@/utils/textParser";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt, comments }) {
  const [commentList, setCommentList] = useState(comments);
  const [newCommentText, setNewCommentText] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      id: commentList.length + 1,
      authorId: 1,
      content: parseText(newCommentText),
      publishedAt: new Date(),
      applauses: 0,
    };

    setCommentList((prevComments) => [...prevComments, newComment]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity("Please add a comment before submitting.");
  };

  const deleteComment = (commentId) => {
    setCommentList((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const isNewCommentEmpty = newCommentText.trim() === "";

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
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentList
          .slice()
          .reverse()
          .map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              author={getUserById(comment.authorId)}
              content={comment.content}
              publishedAt={comment.publishedAt}
              applauses={comment.applauses}
              onDeleteComment={deleteComment}
            />
          ))}
      </div>
    </article>
  );
}
