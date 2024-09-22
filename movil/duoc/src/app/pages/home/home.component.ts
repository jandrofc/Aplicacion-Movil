import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  private AuthService = inject(AuthService);
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.AuthService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated===false) {
        this.router.navigate(['']);
      }
    });
  }
}

