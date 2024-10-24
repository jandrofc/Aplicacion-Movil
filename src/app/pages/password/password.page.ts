import { Component, OnInit, inject} from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage  implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }

}
