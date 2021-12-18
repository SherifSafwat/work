import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material/material.module';
//import { BrowserModule } from '@angular/platform-browser';

//import { HttpClient } from '@angular/common/http';

//import { ApiService } from '../../services/api/api.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
 //import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
 import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
// import { ContactComponent } from './components/contact/contact.component';
// import { ServicesComponent } from './components/services/services.component';
// import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
     AdminDashboardComponent,
     //HeaderComponent,
    // FooterComponent,
     HomeComponent,
     PostComponent,
    // ContactComponent,
    // ServicesComponent,
    // AboutComponent,
  ],
  imports: [
    CommonModule,  
    AdminRoutingModule, 
    MaterialModule,
  ],
  exports: [],
})
export class AdminModule {}
