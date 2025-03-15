import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';  // ✅ Import AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Inventory System';

  constructor(public authService: AuthService) {}  // ✅ Inject AuthService

  logout() {
    this.authService.logout();  // ✅ Call logout method
  }
}
