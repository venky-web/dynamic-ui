import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: "convertToNormal"})
export class ConvertToNormalPipe implements PipeTransform {

    transform(value: string): string {
        if (!value) {
            return "N/A";
        }  
        return value.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    }
}
