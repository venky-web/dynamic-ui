import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

import { WidgetService } from './services/widget.service';
import { MEDICATIONS } from './data/medications';
import { ArrayWidget, TextWidget } from './widgets';
import { ViewContainerDirective } from './directives';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

    @ViewChild("templateContainer", { static: false, read: ViewContainerRef })
    target!: ViewContainerRef;

    title = 'dynamic-ui';
    data: any;

    constructor(
        private widgetService: WidgetService,
        private cfr: ComponentFactoryResolver,
        private renderer: Renderer2,
    ) {
        this.data = MEDICATIONS;
    }

    ngOnInit(): void {
        console.log("init");
    }

    ngAfterViewInit(): void {
        console.log("view init");
        setTimeout(() => {
            this.target.clear();
            this.widgetService.createUI(this.data, this.target);
            // compRef.changeDetectorRef.detectChanges();
            // const instance = compRef?.instance;
            // (instance as any).arrayData = MEDICATIONS;
            // console.dir(instance);
            // setTimeout(() => {
            //     (instance as any).arrayData = [
            //         "abc",
            //         "def"
            //     ];
            //     compRef.injector.get(ChangeDetectorRef).markForCheck();
            //   }, 5000);

        }, 500);
        // this.renderer.appendChild(rootElement, instance);
    }
}
