import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, NgModule, ViewChild, ViewContainerRef } from "@angular/core";


@Component({
    selector: 'array-widget',
    template: `
        <div class="border m-b-12">
            <ng-container #container></ng-container>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class ArrayWidget {

    @Input() arrayData: any[];

    @ViewChild("container", { read: ViewContainerRef, static: true })
    embeddedContainer!: ViewContainerRef;

    constructor(
    ) {
        this.arrayData = [];
    }

}


@NgModule({
    declarations: [
        ArrayWidget,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ArrayWidget,
    ]
})
export class ArrayWidgetModule {}
