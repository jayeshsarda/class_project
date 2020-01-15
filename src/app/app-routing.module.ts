import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NoidaComponent } from './contact/noida/noida.component';
import { DelhiComponent } from './contact/delhi/delhi.component';
import { GurugramComponent } from './contact/gurugram/gurugram.component';
import { CategoryComponent } from './category/category.component';
import { AuthGuard } from './guard/auth.guard';
import { ParentComponent } from './ptc/parent/parent.component';
import { InputComponent } from './ctp/input/input.component';

const routes: Routes = [
  {path: 'ptc', component: ParentComponent},
  {path: 'ctp', component: InputComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: DummyComponent, canActivate: [AuthGuard]},
  {path: 'about-us', component: AboutComponent},
  {path: 'contact-us', component: ContactComponent, children: [
    {path: '', redirectTo: 'noida', pathMatch: 'full'},
    {path: 'noida', component: NoidaComponent},
    {path: 'delhi', component: DelhiComponent},
    {path: 'gurugram', component: GurugramComponent}
 ]},
  {path: 'category/:cn', component: CategoryComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
