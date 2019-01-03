import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {BaseComponent} from './base/base.component';

import {
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule, MatSidenavModule, MatIconModule, MatListModule,
  MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SignupService} from './register/service/signup.service';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {LayoutModule} from '@angular/cdk/layout';
import {SideNavComponent} from './side-nav/side-nav.component';
import {TransactionComponent} from './transaction/transaction.component';
import {LoginComponent} from './login/login.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {TableComponent} from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BaseComponent,
    HomepageComponent,
    SideNavComponent,
    TransactionComponent,
    LoginComponent,
    RegisterComponent,
    LandingpageComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
