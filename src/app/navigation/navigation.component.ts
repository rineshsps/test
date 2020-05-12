import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
// import logo from '../../assets/image/logo.png';
interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  token?: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  currentUser: User;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
        private router: Router,
        private authenticationService: AuthenticationService) {
          this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }

        logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
      }

}
