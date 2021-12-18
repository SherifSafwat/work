import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  selectedId!: number;
  heroes!: Observable;

  constructor(private service:ApiService,
    private route: ActivatedRoute,
    private router: Router) { }  

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.service.getPost(this.selectedId);      
  }

}
