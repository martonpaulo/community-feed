import type { FragmentType } from './fragmentType';

export interface CommentType {
  id: number;
  authorId: number;
  content: FragmentType[][];
  publishedAt: Date;
  applauses: number;
}
