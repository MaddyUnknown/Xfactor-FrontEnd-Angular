import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { LabComponent } from './lab/lab.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'lab', component: LabComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
