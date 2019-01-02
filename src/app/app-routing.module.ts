import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {RegisterComponent} from './register/register.component';
import {TransactionComponent} from './transaction/transaction.component';
import {LoginComponent} from './login/login.component';
import {LandingpageComponent} from './landingpage/landingpage.component';


const routes: Routes = [

  {
    path: 'user',
    component: SideNavComponent,
    children: [
      {path: 'profile', component: HomepageComponent},
      {path: 'wallet', component: TransactionComponent},
    ]
  },
  {
    path: '',
    component: LandingpageComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: '', component: RegisterComponent}
    ]
  },
  {path: '', component: LandingpageComponent},
  
  {path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

