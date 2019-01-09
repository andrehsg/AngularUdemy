import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }

  ngOnInit() {
  }

    onSubmit (form: FormGroup) {

    console.log(form.value.password);
  	this.authService.signUpUser (form.value.email , form.value.password);




  }

}
