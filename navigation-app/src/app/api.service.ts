import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NavMenu } from "./model/nav-menu";
import { getNumberOfCurrencyDigits } from "@angular/common";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  apiURL: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) {}

  getMenus(): Observable<NavMenu> {
    return this.http
      .get<NavMenu>(this.apiURL + "Navigation", {
        headers: this.httpOptions.headers
      })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  public getAll<T>(controller: string) {
    return this.http.get<T>(this.apiURL + controller, {
      headers: this.httpOptions.headers
    });
  }

  public getMenu() {
    return this.http.get<NavMenu>(this.apiURL + "Navigation", {
      headers: this.httpOptions.headers
    });
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };

  // Error handling
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
