import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserPostService } from './services/user-post.service';
import { PostDetailService } from './services/post-detail.service';

const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent,
    resolve: { postListItems: UserPostService },
  },
  {
    path: ':id',
    component: PostDetailComponent,
    resolve: { post: PostDetailService },
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PostRoutingModule {}
