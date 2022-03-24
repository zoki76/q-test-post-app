import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailModel } from '../models/post-detail.model';

@Component({
  selector: 'q-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post: PostDetailModel;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.post = this.route.snapshot.data.post;
  }
}
