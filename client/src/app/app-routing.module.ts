import { NgModule } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  {path: 'adduser' , component: AdduserComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'edit/:id', component: EdituserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
