import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  logout(e) {
    e.preventDefault();
    this.auth.logout();
  }

}
