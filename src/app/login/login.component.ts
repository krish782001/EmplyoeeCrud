import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    email:new FormControl(),
    password: new FormControl()
  })

  login(){
    if(this.loginForm.value.email=="Admin" && this.loginForm.value.password=="Admin@123"){
      Swal.fire('Login success');
      this.route.navigate(['/dashboard'])
      this.loginForm.reset()
    }else{
      Swal.fire('Invalid login!');
      this.loginForm.reset()
    }
    
    console.log(this.loginForm.value)
  }


  
}
