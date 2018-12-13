import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {SignupComponent} from './signup/signup.component';
import {WalletComponent} from './wallet/wallet.component';


const routes: Routes = [

  {
    path: 'login',
    component: SideNavComponent,
    children: [
      {path: 'profile', component: HomepageComponent},
      {path: 'wallet', component: WalletComponent},
      {path: '**', redirectTo: '/login/profile'}
    ]
  },
  {path: '', component: SignupComponent},
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

