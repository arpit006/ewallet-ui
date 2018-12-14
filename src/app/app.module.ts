import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SignupComponent} from './signup/signup.component';
import {BaseComponent} from './base/base.component';

import {
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SignupService} from './signup/service/signup.service';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    BaseComponent,
    HomepageComponent,
    SideNavComponent,
    WalletComponent
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
    MatTableModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
