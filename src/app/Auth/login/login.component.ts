import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

export class User {
  email!: string;
  password!: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logImg = 'assets/Images/login.png'
  errormsg = '' ;
  successmsg = '';
  userForm!: FormGroup;
  user: User  = new User();

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private actrouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }

  onSubmit(user: {
    email: string,
    password: string
  }) {
    this.auth.login(user.email, user.password).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
      this.errormsg = err;
    })
  }

}
