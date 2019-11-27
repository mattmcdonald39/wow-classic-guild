import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'world-boss-container',
  templateUrl: './world-boss-container.component.html',
  styleUrls: ['./world-boss-container.component.scss']
})
export class WorldBossContainerComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
  }

  signout() {
    this.afAuth.auth.signOut()
    .then(() => this.router.navigate(['/login']))
    .catch(err => console.log(err));
  }

}
