import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LearningMarketplaceWeb';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('authToken')) {
      this.authService.decodeToken(localStorage.getItem('authToken'));
    }
  }
}
