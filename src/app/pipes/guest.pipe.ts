import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guest'
})
export class GuestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log({value, args});
    return value.filter(user => user.role === args);
  }

}
