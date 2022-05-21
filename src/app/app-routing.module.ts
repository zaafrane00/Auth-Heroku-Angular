import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { FeedbackAppComponent } from './pages/feedback-app/feedback-app.component';
import { Page404Component } from './pages/page404/page404.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
 
  {
    path : '',
    component : SignupComponent
  },
  {
    path : 'feedback',
    component : FeedbackAppComponent
  },  {
    path : 'basics',
    component : BasicComponent
  },{
    path : 'profile/:name',
    component : ProfileComponent
  },
  {
    path : 'admin',
    loadChildren : ()=>import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  {
    path : '**' , 
    component : Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
