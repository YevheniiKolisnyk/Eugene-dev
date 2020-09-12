import { AuthService } from './../../services/auth.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {

  menu: boolean = false;
  monitorWidth: number = window.innerWidth;
  style = {'height': '150px'};

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.monitorWidth = event.target.innerWidth;
  }

  constructor(
    private router: Router,
    public auth: AuthService
    ) {}

  ngOnInit(): void {
    this.checkSize()
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/blog/admin', 'login']);
  }

  openMenu(){
    this.menu = !this.menu;
    if(this.menu && this.monitorWidth >= 601){
      return this.style = {'height': '250px'}
    } else if(this.menu && this.monitorWidth <= 600){
       return this.style = {'height': '180px'}
    } else{
      this.checkSize()
    }
  }

  checkSize(){
    if(this.monitorWidth <= 600){
      this.style.height = "80px"
    } else{
      this.style.height = "150px"
    }
  }
}
