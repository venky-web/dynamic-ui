import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewContainerRef } from "@angular/core";


@Component({
    selector: 'text-widget',
    template: `
        <div class="key-value p-1">
            <span *ngIf="_key" class="key" innerHTML="{{_key | titlecase}}"></span>
            <span *ngIf="value" [innerHTML]="value"></span>
        </div>
        <ng-container #container></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class TextWidget {

    @Input() set key(value: string) {
        this._key = value;
        if (this._key) {
            this._key = this._key.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        }
    };
    @Input() value: string = "";

    @ViewChild("container", { read: ViewContainerRef, static: true })
    embeddedContainer!: ViewContainerRef;

    _key: string | undefined;

    constructor() {}

}

// Object widget module declaration
@NgModule({
    declarations: [
        TextWidget,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        TextWidget,
    ]
})
export class TextWidgetModule {}
