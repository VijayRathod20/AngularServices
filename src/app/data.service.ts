import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[] = ["vijay","manager"]
  info2: string[] = ["vivek","hr"]

  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  addInfo(info: string){
    this.info1.push(info)
    this.info2.push(info)
    return this.info1

  }

  constructor() { }
}
