import { Component, OnInit } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { MenuService } from "../../api.service";
import { NavMenu } from "../../model/nav-menu";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  navMenu: NavMenu;
  ListOnInit: Function;
  constructor(private menuSerivce: MenuService) {
    this.ListOnInit = function() {
      this.menuSerivce.getMenu().subscribe((res: NavMenu) => {
        this.navMenu = res;
      });
    };
  }

  ngOnInit() {
    this.menuSerivce.getMenu().subscribe((res: NavMenu) => {
      this.navMenu = res;
    });
  }
}
