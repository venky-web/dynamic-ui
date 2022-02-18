import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewContainerRef } from "@angular/core";


@Component({
    selector: 'text-widget',
    template: `
        <div class="key-value p-1">
            <span *ngIf="key" class="key" innerHTML="{{key | titlecase}}"></span>
            <span *ngIf="value" [innerHTML]="value"></span>
        </div>
        <ng-container #container></ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class TextWidget {

    @Input() key: string = "";
    @Input() value: string = "";

    @ViewChild("container", { read: ViewContainerRef, static: true })
    embeddedContainer!: ViewContainerRef;

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
