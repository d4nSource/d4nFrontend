import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-d4n-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
   }

  ngOnInit() {
    console.log('check login state');
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['signin']);
    }
  }

}
