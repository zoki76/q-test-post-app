import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ApiService } from '@core/services';
import { forkJoin, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { concatMap } from 'rxjs/operators';
import { CommentModel } from '../models/comments.model';
import { PostListModel, PostModel } from '../models/post.model';
import { UserModel } from '../models/users.model';

@Injectable()
export class UserPostService implements Resolve<PostListModel[]> {
  constructor(private apiService: ApiService) {}

  resolve(): Observable<PostListModel[]> {
    const postObserver = this.apiService.get<PostModel[]>('posts');
    const userObserver = this.apiService.get<UserModel[]>('users');
    const commentsObserver = this.apiService.get<CommentModel[]>('comments');
    return forkJoin([postObserver, userObserver, commentsObserver]).pipe(
      concatMap(([posts, users, comments]) => {
        return of(this.getPostListItems(posts, users, comments));
      })
    );
  }

  private getPostListItems(
    posts: PostModel[],
    users: UserModel[],
    comments: CommentModel[]
  ): PostListModel[] {
    return posts.reduce((prev, curr) => {
      const postListItem = { ...curr } as PostListModel;
      postListItem.name = this.findUser(users, postListItem);
      postListItem.numberOfComments = this.countComments(
        comments,
        postListItem
      );
      prev = [...prev, postListItem];
      return prev;
    }, [] as PostListModel[]);
  }

  private findUser(users: UserModel[], postListItem: PostListModel): string {
    const user = users.find((user) => user.id === postListItem.userId);
    return user?.name!;
  }

  private countComments(
    comments: CommentModel[],
    postListItem: PostListModel
  ): number {
    const commentNumber: CommentModel[] = comments.filter(
      (comment) => comment.postId === postListItem.id
    );
    return commentNumber?.length;
  }
}
