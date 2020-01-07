import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  {path:'',redirectTo:'/user', pathMatch:'full'},
  {path:'user', component: UserComponent},
  {path:'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
