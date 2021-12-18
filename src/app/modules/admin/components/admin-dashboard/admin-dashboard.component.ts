import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../services/auth/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  logout(): void { this.auth.logout();  }
}

