import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  private navigatedPage: string;

  public getValue() {
    return this.navigatedPage;
  }

  public setValue(value: string): void {
    this.navigatedPage = value;
  }
  constructor() {}
}
