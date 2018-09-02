import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees: string;

  getData: string;
  postData: string;

  key: string = "";
  values: string = "";
  obj = {};

  get data(): string {
    return this.employeeService.serviceData;
  }
  set data(value: string) {
    this.employeeService.serviceData = value;
  }

  constructor(private httpClient: HttpClient, private employeeService: EmployeeService) {
  }

  ngOnInit() {
    //this.employees = this.employeeService.getEmployees();
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data,
        error => console.log(error)
      );
  }



  onTestGet() {
    this.employeeService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => console.log(error),
        () => console.log('completed')
      );
  }

  onKey(event: any) { // without type info
    this.key = event.target.value;
    //console.log(event.target.value)
  }

  onValue(event: any) { // without type info
    this.values = event.target.value;
    //console.log(event.target.value)
  }

  onTestPost() {
    this.employeeService.postJSON()
      .subscribe(
        data => { this.postData = JSON.stringify(data)}, //, console.log(this.key), console.log(this.values), console.log(this.postData) 
        error => console.log(error),
        () => console.log()
      )
  }



  name: string = '';
  age: number;
  found: boolean = false;
  pollo = "pollito";
  onNameKeyUp(event: any) {
    this.name = event.target.value;
  }

  
  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
      .subscribe(
        (data:any[]) => {
          console.log(data);
          if(data.length) {
            this.age = data[0].age;
            this.found = true;
          }
        }
      )
  }

/*
  onProfile() {
    this.employeeService.getProfile()
      .subscribe(
        (data: any[]) => {
          console.log(data);
          if(data.length) {
            this.age = data[0].age;
            this.found = true;
          }
        }
      )
  }
*/
  //------------------

  
  postProfile() {
    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
      {
        name: `${this.key}`,
        age: 7
      })
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }

}
