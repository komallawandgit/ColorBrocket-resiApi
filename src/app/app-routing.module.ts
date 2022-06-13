import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeByIdComponent } from './Employee/employee-by-id/employee-by-id.component';
import { EmployeeComponent } from './Employee/employee/employee.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '',
  component: LoginComponent,
   pathMatch: 'full'
 },
{
  path:'login',
  component:LoginComponent
},
{
  path:'employeeList',
  component:EmployeeComponent
},
{
  path:'employeeListById/:id',
  component:EmployeeByIdComponent
},
{
  path:'**',
  component:LoginComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
