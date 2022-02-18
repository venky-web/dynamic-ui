import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewContainerRef } from "@angular/core";


@Component({
    selector: 'object-widget',
    template: `
        <div class="section-header" *ngIf="header">
            <span>{{header | titlecase}}</span>
        </div>
        <div class="p-2 pl-4">
            <ng-container #container></ng-container>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class ObjectWidget {

    @Input() set value(data: any) {
        if (!data || typeof data !== "object") {
            this.obj = null;
            return;
        }
        this.obj = data;
        this.objHeaders = Object.keys(this.obj);
    }
    @Input() header: string = "";


    @ViewChild("container", { read: ViewContainerRef, static: true })
    embeddedContainer!: ViewContainerRef;

    obj: any;
    objHeaders: string[] = [];

    constructor() { }

}


// Object widget module declaration
@NgModule({
    declarations: [
        ObjectWidget,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ObjectWidget,
    ]
})
export class ObjectWidgetModule {}
