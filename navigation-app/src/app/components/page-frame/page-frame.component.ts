import {
  Component,
  OnInit,
  OnChanges,
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  Input,
  Type,
  ViewContainerRef,
  SimpleChanges,
  SimpleChange
} from "@angular/core";
import { CommonService } from "../../services/common.service";
import { isNullOrUndefined } from "util";
@Component({
  selector: "app-page-frame",
  templateUrl: "./page-frame.component.html",
  styleUrls: ["./page-frame.component.scss"]
})
export class PageFrameComponent implements OnInit, OnChanges {
  private _navigatedPage: string;
  @Input() set navigatedPage(value: string) {
    this._navigatedPage = value;
  }

  get navigatedPage() {
    return this._navigatedPage;
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private vcRef: ViewContainerRef,
    public commonService: CommonService
  ) {}
  componentRef: any;
  appendComponentToBody(component: any) {
    // 1. Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.getElementById("root").appendChild(domElem);
  }

  detachComponent() {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  getComponentType() {
    const factories = Array.from(
      this.componentFactoryResolver["_factories"].keys()
    );
    const factoryClass = <Type<any>>(
      factories.find((x: any) => x.name === this._navigatedPage)
    );
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      factoryClass
    );
    return factory.componentType;
  }
  ngOnInit() {
    this._navigatedPage = this.navigatedPage;
    if (isNullOrUndefined(this._navigatedPage)) {
      return;
    }
    var componentType = this.getComponentType();
    this.appendComponentToBody(componentType);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.navigatedPage.isFirstChange()) {
      return;
    }
    this.detachComponent();
    var componentType = this.getComponentType();
    this.appendComponentToBody(componentType);
  }
}
