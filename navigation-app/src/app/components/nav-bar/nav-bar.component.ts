import { Component, OnInit, Input, Output } from "@angular/core";
import { MenuService } from "../../api.service";
import { NavMenu } from "../../model/nav-menu";
import { PageFrameComponent } from "../page-frame/page-frame.component";
import { CommonService } from "../../services/common.service";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  @Input("pageFrame") model: PageFrameComponent;
  @Output("change") change = new EventEmitter();
  navMenu: NavMenu;

  constructor(
    private menuSerivce: MenuService,
    public commonService: CommonService
  ) {}

  ngOnInit() {
    this.menuSerivce.getMenu().subscribe((res: NavMenu) => {
      this.navMenu = res;
    });
  }

  onChange(page) {
    var _page = "";
    switch (page) {
      case "EFT":
        _page = "EftComponent";
        break;
      case "Money Order":
        _page = "MoneyOrderComponent";
        break;
      case "Money Withdraw":
        _page = "MoneyWithdrawComponent";
        break;
      case "Money Deposit":
        _page = "MoneyDepositComponent";
        break;
      default:
        _page = "EftComponent";
        break;
    }
    this.commonService.setValue(_page);
    this.change.emit(_page);
  }
}
