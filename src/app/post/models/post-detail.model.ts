import { CommentModel } from './comments.model';
import { PostModel } from './post.model';
import { UserModel } from './users.model';

export interface PostDetailModel extends PostModel {
  user: UserModel;
  comments: CommentModel[];
}
