import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { RegistService } from '../services/regist.service';
import { User } from '../dataClass/user';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [ RegistService ]
})
export class AuthorizationComponent implements OnInit {
  constructor( private registService: RegistService) {}

  kayitFormu: FormGroup;
  user = new User();

  ngOnInit() {
    this.createForm();
  }


  createForm() {
    this.kayitFormu = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit() {
    // console.log(this.kayitFormu);
    this.login(this.kayitFormu);
  }

  register(kayitFormu: FormGroup) {
    console.log(kayitFormu.value.email);
    this.user.email = kayitFormu.value.email;
    this.user.password = kayitFormu.value.password;
    this.registService.register(this.user);
  }

  login(kayitFormu: FormGroup) {
    // console.log(kayitFormu.value.email);
    this.user.email = kayitFormu.value.email;
    this.user.password = kayitFormu.value.password;
    this.registService.login(this.user);
  }
}

