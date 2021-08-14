import { Injectable } from '@angular/core';
import stringsValues from './../strings/strings.json';

@Injectable({providedIn: 'root'})
export class LocalizationService {
  public get(id: string): string {
    return stringsValues[id] as string;
  }
}
