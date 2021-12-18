import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { ApiService } from '../../../../services/api/api.service';

import { CountryReports } from '../../../../data/countryReports';
import { Posts } from '../../../../data/posts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  ELEMENT_DATA: Posts[] = [];
  displayedColumns: string[] = [
    'userid',
    'id',
    'actions',
  ];

  /*displayedColumns: string[] = [
    'country',
    'cases',
    'todayCases',
    'deaths',
    'todayDeaths',
    'recovered',
    'active',
    'critical',
    'casesPerOneMillion',
    'deathsPerOneMillion',
    'tests',
    'testsPerOneMillion',
  ];*/
  dataSource = new MatTableDataSource<Posts>(this.ELEMENT_DATA);

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
     resp.subscribe(report=>this.dataSource.data=report  as Posts[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecord(id: number){
    //document.location.href = 'http://localhost:4200/admin/post/{id}';
    this.router.navigate(['/post', { id: id }]);
    console.log(id);
  }
}
