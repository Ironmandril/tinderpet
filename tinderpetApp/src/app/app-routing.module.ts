import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';

const routes: Routes = [
  {path:'candidatos', component: AnimalesComponent, pathMatch:'full'},
  {path:'chat', loadChildren: './chat/chat.module#ChatModule'},
  {path:'', redirectTo: 'candidatos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
