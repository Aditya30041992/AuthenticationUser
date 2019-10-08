import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleloginComponent } from './simplelogin/simplelogin.component';
import { FirebaseloginComponent } from './firebaselogin/firebaselogin.component';

const routes: Routes = [
  { path: 'firebase', component: FirebaseloginComponent },
  { path: 'simple', component: SimpleloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
