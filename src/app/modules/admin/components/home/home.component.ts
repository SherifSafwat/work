import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ApiService } from '../../../../services/api/api.service';

import { CountryReports } from '../../../../data/countryReports';
import { IPost } from '../../../../data/posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  ELEMENT_DATA: IPost[] = [];
  displayedColumns: string[] = [
    'userid',
    'id',
    'actions',
  ];

  dataSource = new MatTableDataSource<IPost>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  //@ViewChild(MatSort, { static: true }) sort!: MatSort;  

  constructor(private service:ApiService, private router: Router) { }  
 
  ngOnInit() {
     this.dataSource.paginator = this.paginator;
     //this.dataSource.sort=this.sort;
     this.getAllReports();
  }

  public getAllReports(){
     let resp = this.service.covid19Reports();
     resp.subscribe(report=>this.dataSource.data=report  as IPost[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(id: number){
    this.router.navigate(['admin/post', id]);
  }
}
