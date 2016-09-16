import { Component, OnInit }  from '@angular/core';
import { NgForm }             from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {
    username: 'Hello',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(`form send: ${form.value.username}`);
  };

}