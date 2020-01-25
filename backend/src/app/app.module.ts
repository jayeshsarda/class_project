import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminregisterComponent } from './pages/adminregister/adminregister.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContainerComponent } from './pages/container/container.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { AddcategoryComponent } from './pages/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/category/editcategory/editcategory.component';
import { from } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './pipes/search.pipe';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { EditproductComponent } from './pages/product/editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminregisterComponent,
    DashboardComponent,
    SidebarComponent,
    ContainerComponent,
    CategoryComponent,
    ProductComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    SearchPipe,
    AddproductComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
