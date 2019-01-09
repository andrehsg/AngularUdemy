import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
  }

  onSubmit (form: FormGroup) {

    console.log(form.value.password);
  	this.authService.signInUser (form.value.email , form.value.password);




  }

}
