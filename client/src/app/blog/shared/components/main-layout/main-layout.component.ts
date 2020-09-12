import { Router } from '@angular/router';
import { AuthService } from './../../../admin/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  redirect() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/blog/admin/dashboard']);
    } else {
      this.router.navigate(['/blog/admin/login']);
    }
  }
}
