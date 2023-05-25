import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

const routes: Routes = [{
  path:'',
  component:MainComponent},
{
  path:'details/:id',
  component:TaskDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
