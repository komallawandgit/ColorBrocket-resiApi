import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';
@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.scss']
})
export class EmployeeByIdComponent implements OnInit {
  id:any;
  EmployeeData:any;

  constructor(private router:ActivatedRoute,private employeeService:EmployeeServiceService,private routes:Router) { }

  ngOnInit(): void {
 
   
    this.router.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    });
    console.log("id------",this.id)
    this.employeeService.getEmployeebyId(this.id).subscribe((result)=>{
      this.EmployeeData=result;
    })
    console.log("employee data",this.EmployeeData)
  }
  logout(){
    this.routes.navigate(["/login"]);
  }

}
