import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [DataService]
})
export class EmployeeComponent implements OnInit {

  infoRecieved1:string[]=[];
  infoRecieved2:string[]=[];
  

  getInfoFromService1(){
    this.infoRecieved1 = this.dservice.getInfo1()
  }
  getInfoFromService2(){
    this.infoRecieved2 = this.dservice.getInfo2()
  }
  
  

  constructor(private dservice:DataService) { }

  ngOnInit(): void {
  }

  updateInfo(frm: any){
    this.dservice.addInfo(frm.value.city)
  }

}
