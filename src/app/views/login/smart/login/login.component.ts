import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from '../../login-state/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: SessionService,
  private router: Router) {

  }
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      .subscribe(() => this.router.navigateByUrl(''));
    }
  }

}
