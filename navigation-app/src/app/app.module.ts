import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { PageFrameComponent } from "./components/page-frame/page-frame.component";
import { HttpClientModule } from "@angular/common/http";
import { MenuService } from "./api.service";
import { NavMenu } from "./model/nav-menu";
import { Menu } from "./model/menu";
import { EftComponent } from "./pages/eft/eft.component";
import { MoneyOrderComponent } from "./pages/money-order/money-order.component";
import { MoneyWithdrawComponent } from "./pages/money-withdraw/money-withdraw.component";
import { MoneyDepositComponent } from "./pages/money-deposit/money-deposit.component";
import { NavigationContainerComponent } from './components/navigation-container/navigation-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageFrameComponent,
    EftComponent,
    MoneyOrderComponent,
    MoneyWithdrawComponent,
    MoneyDepositComponent,
    NavigationContainerComponent
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [MenuService],
  bootstrap: [AppComponent],
  entryComponents: [
    EftComponent,
    MoneyOrderComponent,
    MoneyWithdrawComponent,
    MoneyDepositComponent
  ]
})
export class AppModule {}
