import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { AdminregisterComponent} from './pages/adminregister/adminregister.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {CategoryComponent} from './pages/category/category.component';
import {ProductComponent} from './pages/product/product.component';
import {AuthGuard} from './guards/auth.guard';
import {ContainerComponent} from './pages/container/container.component';
import { AddcategoryComponent } from './pages/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/category/editcategory/editcategory.component';

const routes: Routes = [
  {path: '', component: AdminloginComponent},
  {path: 'register', component: AdminregisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children:[
      {path: 'container', component: ContainerComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'product', component: ProductComponent},
      {path: 'addcategory', component: AddcategoryComponent},
      {path: 'editcategory/:cid', component: EditcategoryComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
