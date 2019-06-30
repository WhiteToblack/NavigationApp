import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "app-navigation-container",
  templateUrl: "./navigation-container.component.html",
  styleUrls: ["./navigation-container.component.scss"]
})
export class NavigationContainerComponent implements OnInit {
  navigatedPage: string;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    if (this.navigatedPage === undefined) {
      this.navigatedPage = "EftComponent";
    }
  }

  updateItem(value: string) {
    this.navigatedPage = this.commonService.getValue();
  }
}
