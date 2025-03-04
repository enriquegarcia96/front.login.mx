import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginScreenComponent} from "./pages/login-screen/login-screen.component";

const routes: Routes = [{
  path: '',
  component: LoginScreenComponent,
  children: [
    {
      path: 'login',
      component: LoginScreenComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
