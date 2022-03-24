import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '@core/services';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { concatMap } from 'rxjs/internal/operators/concatMap';
import { CommentModel } from '../models/comments.model';
import { PostDetailModel } from '../models/post-detail.model';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/users.model';

@Injectable()
export class PostDetailService implements Resolve<PostDetailModel> {
  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PostDetailModel> {
    const postObserver = this.apiService.get<PostModel[]>('posts');
    const userObserver = this.apiService.get<UserModel[]>('users');
    const commentsObserver = this.apiService.get<CommentModel[]>('comments');
    return forkJoin([postObserver, userObserver, commentsObserver]).pipe(
      concatMap(([posts, users, comments]) => {
        const post: PostModel = posts.find(
          (post) => post.id === Number(route.params.id)
        )!;
        const postDetail = { ...post } as PostDetailModel;
        return this.getPostDetail(postDetail, users, comments);
      })
    );
  }

  private getPostDetail(
    post: PostDetailModel,
    users: UserModel[],
    comments: CommentModel[]
  ): Observable<PostDetailModel> {
    post.user = this.findUser(users, post);
    post.comments = this.getPostComments(comments, post);
    return of(post);
  }

  private findUser(users: UserModel[], post: PostDetailModel): UserModel {
    const user = users.find((user) => user.id === post.userId);
    return user ? user : null;
  }

  private getPostComments(
    comments: CommentModel[],
    post: PostDetailModel
  ): CommentModel[] {
    const filteredComments: CommentModel[] = comments.filter(
      (comment) => comment.postId === post.id
    );
    return filteredComments;
  }
}
