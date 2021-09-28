import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { FirstFiveOrdersComponent } from './first-five-orders/first-five-orders.component';
import { AllOtherOrdersComponent } from './all-other-orders/all-other-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrderDashboardComponent,
    FirstFiveOrdersComponent,
    AllOtherOrdersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
