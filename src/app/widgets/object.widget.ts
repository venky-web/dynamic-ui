import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewContainerRef } from "@angular/core";


@Component({
    selector: 'object-widget',
    template: `
        <div class="section-header" *ngIf="_header">
            <span>{{_header | titlecase}}</span>
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
    @Input() set header(value: string) {
        this._header = value;
        if (this._header) {
            this._header = this._header.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        }
    }


    @ViewChild("container", { read: ViewContainerRef, static: true })
    embeddedContainer!: ViewContainerRef;

    obj: any;
    objHeaders: string[] = [];
    _header: string | undefined;

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
