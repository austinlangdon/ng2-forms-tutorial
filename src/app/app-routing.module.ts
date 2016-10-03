import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const routes: Routes = [
  { path: '', component:  AppComponent },
  { path: 'simple-form', component: SimpleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2FormsTutorialRoutingModule { }
