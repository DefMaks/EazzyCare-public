import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobals } from 'src/app/services/app.global';
import { environment } from 'src/environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.4s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('0.4s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginPage implements OnInit {

  logo = environment.appLogo
  login = true
  signup = false

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signupForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(
    public appGlobal: AppGlobals,
    private router: Router
  ) { }

  ngOnInit() {
  }

  switchOperation(){
    this.login = !this.login
    this.signup = !this.signup
  }

  onSubmit(typeSubmit: string){
    // this.router.navigateByUrl("/home")
  }

  skip(){
    this.router.navigateByUrl("/home")
  }

}
