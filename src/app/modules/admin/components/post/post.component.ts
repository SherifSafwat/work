//import { CommonModule } from '@angular/common';  
//import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IPost } from 'src/app/data/posts';
import { IProduct } from 'src/app/data/product';
import { ApiService } from 'src/app/services/api/api.service';
import { ProductService } from 'src/app/services/firebase/product.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  
  id!: string | null;
  flag: boolean = true;
  ELEMENT_DATA!: IPost;
  form!: FormGroup;

  book: IProduct = {id: 0, ename: '', aname: '' };

  constructor(    
    private service1: ApiService,
    private service:ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.service1.getPost(Number(this.id)).subscribe((data) => {
      this.ELEMENT_DATA = data as IPost;
      console.log(data);
      

    this.form = this.fb.group({
      //userId: [null, [Validators.required, Validators.minLength(1)]],
      userId: [null,],
      name: [ this.ELEMENT_DATA ? this.ELEMENT_DATA.userId.toString() : null ],
      password: [null], 
      //email: [null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),],],
      email: [null],
      dob: [null],
      id: [33],
      country: [null],
      gender: [null], 
      address: [null],
    });


  });

  }


  onSubmit(form: FormGroup) {

    this.service.addBook( form.value );
    //this.service.addBook(form.value).then(() => form.reset());
    //this.service.add(JSON.stringify(form.value)).then(() => form.reset());
    
    //*alert( this.service.add( JSON.stringify(form.value) ) );
    
    //*this.form.controls['name'].setValue("aa");

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
    
}

