import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
//  import { MatTableDataSource } from '@angular/material/table';
//  import { MatPaginator } from '@angular/material/paginator';
//  import { MatSort } from '@angular/material/sort';

const materialComp = [
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  
  // MatTableDataSource,
  // MatPaginator,
  // MatSort ,
];

@NgModule({
  declarations: [],
  imports: [materialComp],
  exports: [materialComp]
})
export class MaterialModule { }
