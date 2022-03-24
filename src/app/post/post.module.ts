import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostRoutingModule } from './post-routing-module';
import { UserPostService } from './services/user-post.service';
import { SharedModule } from '../shared/shared.module';
import { PostDetailService } from './services/post-detail.service';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [SharedModule, CommonModule, PostRoutingModule],
  exports: [PostRoutingModule],
  providers: [UserPostService, PostDetailService],
})
export class PostModule {}
