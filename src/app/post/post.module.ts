import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostRoutingModule } from './post-routing-module';
import { UserPostService } from './services/user-post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent],
  imports: [SharedModule, CommonModule, PostRoutingModule],
  exports: [PostRoutingModule],
  providers: [UserPostService],
})
export class PostModule {}
