import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

export class User {
    id!: number;
    name!: string;
    surname!: string;
    email!: string;
    password!: string;
    phone!: number;
    rue!: string;
    ville!: string;
    pays!: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  logImg = 'assets/Images/login.png'
  errormsg = '' ;
  successmsg = '';
  userForm!: FormGroup;
  user: User  = new User();
  isLoginMode = true;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private actrouter: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      rue: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
    })
  }

  onSubmit(user: {
      fname: string,
      lname: string,
      email: string,
      phone: string,
      password: string,
      street: string,
      town: string,
      country: string
    }) {

      this.isLoading = true;
      this.auth.singUp(user.email, user.password).subscribe((res) => {
        console.log(res);
        this.isLoading = false;
      }, (err) => {
        console.log(err);
        this.isLoading = false;
        this.errormsg = err;
      });

      this.auth.addUser(user); 
  }

}
