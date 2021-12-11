import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { CountryReports } from '../../../../data/countryReports';
import { ApiService } from '../../../../services/api/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  ELEMENT_DATA: CountryReports[] = [];
  displayedColumns: string[] = [
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
  ];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;  

  constructor(private service:ApiService) { }  
 
  ngOnInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort=this.sort;
     this.getAllReports();
  }

  public getAllReports(){
     let resp = this.service.covid19Reports();
     resp.subscribe(report=>this.dataSource.data=report  as CountryReports[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

//import { Component, OnInit, ViewChild } from '@angular/core';
//import {MaterialModule} from  '../../../../material/material.module';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

//import { CountryReports } from '../../../../data/countryReports';
//import { ApiService } from '../../../../services/api/api.service';

// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
/*
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
*/
  // ELEMENT_DATA: CountryReports[] = [];
  // displayedColumns: string[] = [
  //   'country',
  //   'cases',
  //   'todayCases',
  //   'deaths',
  //   'todayDeaths',
  //   'recovered',
  //   'active',
  //   'critical',
  //   'casesPerOneMillion',
  //   'deathsPerOneMillion',
  //   'tests',
  //   'testsPerOneMillion',
  // ];
  // dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  // @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort!: MatSort;

  // constructor() {}
  // ngOnInit() {}

  /*
  constructor(private service:ApiService) { }
  
 
  ngOnInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort=this.sort;
     this.getAllReports();
  }

  public getAllReports(){
     let resp = this.service.covid19Reports();
     resp.subscribe(report=>this.dataSource.data=report  as CountryReports[])
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/
//}
