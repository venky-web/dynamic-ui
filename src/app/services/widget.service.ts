import { ChangeDetectorRef, ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";

import { ArrayWidget, ObjectWidget, TableWidget, TextWidget } from "../widgets";


@Injectable({
    providedIn: "root"
})
export class WidgetService {

    widgets: any = {
        "array": ArrayWidget,
        "object": ObjectWidget,
        "string": TextWidget,
        "table": TableWidget,
    };

    restrictedKeys: string[] = [
        "id",
    ];

    sectionNames: string[] = [
        "ingredient"
    ];

    constructor(
        private cfr: ComponentFactoryResolver,
    ) {}

    createUI(data: any, vcRef: ViewContainerRef, key?: string) {
        if (!data || !vcRef) { return; }
        if (Array.isArray(data)) { // data is of type array
            const compRef = this.renderComp("array", vcRef);
            compRef.injector.get(ChangeDetectorRef).markForCheck();
            for (const item of data) {
                this.createUI(item, compRef.instance.embeddedContainer);
            }
        } else if (typeof data === "object") { // data is of type object
            const compRef = this.renderComp("object", vcRef);
            compRef.injector.get(ChangeDetectorRef).markForCheck();
            if ("header" in compRef.instance && key) {
                compRef.instance.header = key;
            }
            for (const item in data) {
                if (this.restrictedKeys.includes(item)) {
                    continue;
                } else if (this.sectionNames.includes(item)) {
                    const compRef = this.renderComp("table", vcRef);
                    if ("data" in compRef.instance) {
                        compRef.instance.data = data[item];
                    }
                    if ("header" in compRef.instance) {
                        compRef.instance.header = item;
                    }
                } else {
                    this.createUI(data[item], compRef.instance.embeddedContainer, item);
                }
            }
        } else { // any other type will be displayed as string
            const compRef = this.renderComp("string", vcRef);
            if ("value" in compRef.instance) {
                compRef.instance.value = data;
            }
            if ("key" in compRef.instance && key) {
                compRef.instance.key = key;
            }
            compRef.injector.get(ChangeDetectorRef).markForCheck();
        }
    }

    renderComp(type: string, vcRef: ViewContainerRef) {
        const component = this.widgets[type];
        const componentFactory = this.cfr.resolveComponentFactory(component);
        const componentRef = vcRef.createComponent<any>(componentFactory);
        return componentRef;
    }
}
