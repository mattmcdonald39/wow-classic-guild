import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.emailFormControl.value, this.passwordFormControl.value)
    .then(() => {
      // router to login (should just go to home page whatev)
    })
    .catch(err => console.log(err));
  }
}
