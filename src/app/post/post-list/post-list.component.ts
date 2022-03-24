import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostListModel } from '../models/post.model';

@Component({
  selector: 'q-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  postListItems: PostListModel[];

  gridPostsConfig: {
    title: string;
    key: string;
  }[] = [
    {
      title: 'Id',
      key: 'id',
    },
    {
      title: 'Post Title',
      key: 'title',
    },
    {
      title: 'Author',
      key: 'name',
    },
    {
      title: 'Number of Comments',
      key: 'numberOfComments',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postListItems = this.route.snapshot.data.postListItems;
  }

  getPostResult(item: PostListModel) {
    this.router.navigate([`post`, item.id]);
  }
}
