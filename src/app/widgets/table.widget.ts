import { CommonModule } from "@angular/common";
import { ApplicationRef, ChangeDetectionStrategy, Component, ComponentFactoryResolver, Injector, Input, NgModule, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";

import { PipesModule } from "../pipes";
import { WidgetService } from "../services/widget.service";


@Component({
    selector: 'table-widget',
    template: `
        <div class="section-header" *ngIf="_header">
            <span>{{_header | titlecase}}</span>
        </div>
        <table class="table table-striped table-bordered p-2 m-2">
            <thead>
                <tr>
                    <th scope="col" *ngFor="let header of _headers">
                        {{header | convertToNormal}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of _data; let i = index">
                    <td *ngFor="let header of _headers">
                        <div id="{{header}}_{{i}}">{{item[header] | json}}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
    changeDetection: ChangeDetectionStrategy.Default
})
export class TableWidget {

    @Input() set data(data: any) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            this._data = null;
            return;
        }
        this._data = data;
        this._headers =  Object.keys(this._data[0]);
    }
    @Input() set header(value: string) {
        this._header = value;
        if (this._header) {
            this._header = this._header.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
        }
    }


    @ViewChild("container", { read: ViewContainerRef, static: true })
    embeddedContainer!: ViewContainerRef;

    _data: any;
    _headers: string[] = [];
    _header: string | undefined;

    constructor(
        private widgetService: WidgetService,
        private cfr: ComponentFactoryResolver,
        private injector: Injector,
        private vcr: ViewContainerRef,
        private applicationRef: ApplicationRef,
    ) { }

    getHeaderName(header: string): string {
        return header.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    }

    addContent(data: any, header: string, index: number) {
        // let factory = this.resolver.resolveComponentFactory(SimpleComponent);

        // let newNode = document.createElement('div');
        // newNode.id = 'placeholder';
        // newNode.
        // document.getElementById('container').appendChild(newNode);

        // const ref = factory.create(this.injector, [], newNode);
        // this.app.attachView(ref.hostView);
        if (!data) { return; }
        var container = document.getElementById(`${header}_${index}`);
        
    }

    createComponent(type: string, vcRef?: ViewContainerRef,  element?: any) {
        const component = this.widgetService.widgets[type];
        const componentFactory = this.cfr.resolveComponentFactory(component);
        let compRef: any;
        if (vcRef) {
            compRef = vcRef.createComponent<any>(componentFactory);
        } else if (element) {
            compRef= componentFactory.create(this.injector, [], element);
            this.applicationRef.attachView(compRef.hostView);
        }
        return compRef;
    }


}


// widget module
@NgModule({
    declarations: [
        TableWidget,
    ],
    imports: [
        CommonModule,
        PipesModule,
    ],
    exports: [
        TableWidget,
    ]
})
export class TableWidgetModule {}
