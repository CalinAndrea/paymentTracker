import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PaymentComponent} from './components/payment/payment.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { PaymentService } from './Services/payment.service';

const appRoutes: Routes = [
  {path: 'payments', component: PaymentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    HttpModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
