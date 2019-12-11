import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoComponent} from './components/photo/photo.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: "", component: AppComponent},
  { path: "photo", component: PhotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
