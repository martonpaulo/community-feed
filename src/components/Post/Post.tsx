import { useState } from 'react';
import { TimeAgo } from '../TimeAgo/TimeAgo';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import { Content } from '../Content/Content';
import { getUserById } from '../../data/users';
import { parseText } from '../../utils/textParser';

import styles from './Post.module.css';
import type { PostType } from '../../types/postType';
import type { UserType } from '../../types/userType';

interface PostProps {
  postData: PostType;
  authorData: UserType;
}

export function Post({ postData, authorData }: PostProps) {
  const { content, publishedAt, comments } = postData;
  const authorName = authorData.name;
  const authorRole = authorData.role;

  const [commentList, setCommentList] = useState(comments);
  const [newCommentText, setNewCommentText] = useState('');

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newComment = {
      id: commentList.length + 1,
      authorId: 1,
      content: parseText(newCommentText),
      publishedAt: new Date(),
      applauses: 0,
    };

    setCommentList((prevComments) => [...prevComments, newComment]);
    setNewCommentText('');
  };

  const handleNewCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentId: number) => {
    setCommentList((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId),
    );
  };

  const isNewCommentEmpty = newCommentText.trim() === '';

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar size={4} user={authorData} />
          <div className={styles.authorInfo}>
            <strong>{authorName}</strong>
            <span>{authorRole}</span>
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
          .map((comment) => {
            const author = getUserById(comment.authorId);
            return (
              author && (
                <Comment
                  key={comment.id}
                  commentData={comment}
                  authorData={author}
                  onDeleteComment={deleteComment}
                />
              )
            );
          })}
      </div>
    </article>
  );
}
