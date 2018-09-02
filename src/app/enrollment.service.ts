import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
	url = '';
  constructor(private http: HttpClient) { }

  enroll(user: User) {
  	this.http.post<any>(this.url, user);
  }
}
