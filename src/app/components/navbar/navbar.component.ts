import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth/auth.service';
import { User } from 'src/core/models/user.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { UserRequest } from 'src/core/models/request/user-request.model';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];
  currentUser: User | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router, private readonly apiService: ApiService, private messageService: MessageService) { }
  ngOnInit() {

    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = user !== null;
    });

    this.items = [
      {
        
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            routerLink: '/profile'
          },
          {
            label: 'Sign-Out',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logOut();

            }
          }
        ]
      }
    ];
  }





  async logOut() {
    sessionStorage.clear();
    await this.router.navigate(['/home']);
    location.reload();


  }

}
