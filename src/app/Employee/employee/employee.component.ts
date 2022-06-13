import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeData:any=[];

  constructor(private employeeService:EmployeeServiceService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
   
    this.spinner.show();
    this.employeeService.getEmployee().subscribe((result)=>{
      this.spinner.hide();
      this.employeeData=result;
      console.log("employee Data ---",this.employeeData);
    })
  
  }
  viewEmployee(id:any){
    console.log("id",id);
    this.router.navigate(["/employeeListById",id])

  }
  Logout(){
    this.router.navigate(["/login"]);

  }


}
