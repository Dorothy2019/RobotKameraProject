import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoComponent} from './components/photo/photo.component';
import {WelcomePageComponent} from './components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: "", component: WelcomePageComponent},
  { path: "photo", component: PhotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
