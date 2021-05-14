import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() { }

  formatGameNameToUpperCases(name?: string): string {
    if (!name) return '';

    return this.replaceAll(name, '-', ' ')
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (a) => {
        return a.toUpperCase();
      });
  }

  replaceAll(str: string, from: string, to: string, ignore: boolean = true) {
    return str
      .replace(new RegExp(
        from.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '\\$&'),
        (ignore?'gi':'g')),
      (typeof(to)=='string')?to.replace(/\$/g, '$$$$'):to);
  }
}
