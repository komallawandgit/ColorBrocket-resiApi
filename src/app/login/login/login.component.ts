import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  title="ColorBracket Technologies LLP."
  paggedApiResponse:any;
  userList: any;
  submitted = false;
 
  constructor(private  LoginService:LoginServiceService,private router:Router,private formBuilder:FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.LoginService.getusers().subscribe(result => {
      this.userList = result;
      console.log('UserList', this.userList);
    });
    
    this.LoginForm = this.getFormBuilder();

  }
     
  getFormBuilder() {
    return this.formBuilder.group({
      user_id: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  Login(){
      this.submitted = true;

      if (!this.LoginForm.invalid) {
        console.log("Login Form", this.LoginForm.value)
      if(this.userList.find((x: any) => x.user_id === this.LoginForm.value.user_id &&
      this.userList.find((x: any) => x.password === this.LoginForm.value.password))) {
        this.toastr.success('Success'); 

        this.router.navigate(["/employeeList"])
      }  
      else{
        this.toastr.error("User not found. ", 'Error'); 
        this.router.navigate(["/login"])
      }
      
    }
    else{
      this.toastr.error("User not found. ", 'Error'); 
    }   
  }
  get f() { return this.LoginForm.controls; }

}
