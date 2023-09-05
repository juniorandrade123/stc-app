import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request-help/request-service';
import { isNil } from 'lodash';

@Component({
  selector: 'app-dual-persona',
  templateUrl: './dual-persona.component.html',
  styleUrls: ['./dual-persona.component.scss'],
})
export class DualPersonaComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private router: Router,
    private serviceUser: RequestService) { }

  ngOnInit() { }

  viewDashboard() {
    this.router.navigate(['/'])
  }

  viewAgent() {
    this.router.navigate(['agent'])
  }

  updateUserToken() {
    const token = localStorage.getItem('pushToken');
    if (!isNil(this.user) && !isNil(token)) {
      const model = {
        id: this.user.id,
        pushToken: token
      }

      this.serviceUser.post('User/update-push-token', JSON.stringify(model)).subscribe();
    }
  }

}
