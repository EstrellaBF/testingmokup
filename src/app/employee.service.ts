import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { EmployeeListComponent } from './employee-list/employee-list.component'

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	serviceData: string;
	private url: string = "/assets/data/employees.json";

	key: string;
	value: string;
	constructor(private http: HttpClient) { }

	getEmployees(): Observable<IEmployee[]> {
		return this.http.get<IEmployee[]>(this.url);
  	/*
  	return [
		{"id": 1, "name": "Andrew", "age": 30},
		{"id": 2, "name": "Brandon", "age": 25},
		{"id": 3, "name": "Christina", "age": 26},
		{"id": 4, "name": "Elena", "age": 28},
	]
	*/
	}

	getCurrentTime() {
		return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts ').pipe(
			map(res => res)
		)
	}

	postJSON() {
		//const headers = new Headers().set("Content-Type", "application/json");
  	/*
  	var params = "json=" + json;
  	var headers = new Headers();

  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	*/
		var json = {};
		return this.http.post('https://my-json-server.typicode.com/typicode/demo/posts', json)
			.pipe(map(res => res,
				err => { console.log("error") }));
	}


/*
	getProfile() {
		var name = this.e.name;
		return this.http.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${name}`)
		.pipe(
			map(res => res)
		)

	}
*/
}
