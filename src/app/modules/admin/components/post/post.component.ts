import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/data/posts';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  id!: string | null;
  ELEMENT_DATA!: Posts;

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');    
    this.service.getPost(Number(this.id))
      .subscribe(data => { this.ELEMENT_DATA = data as Posts; console.log(data); });      
  }
}
