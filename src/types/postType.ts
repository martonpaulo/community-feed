import type { CommentType } from './commentType';
import type { FragmentType } from './fragmentType';

export interface PostType {
  id: number;
  authorId: number;
  content: FragmentType[][];
  publishedAt: Date;
  comments: CommentType[];
}
