import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth
      .signInWithEmailAndPassword(this.emailFormControl.value, this.passwordFormControl.value)
      .then(() => {
        this.router.navigate(['/worldbosses']);
      })
      .catch(err => console.log(err));
  }

}
