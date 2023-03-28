import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private http : HttpClient) { }


registerUser(userDetails:any): Observable<any> {
  let API_URL = environment.REST_API + '/users/register';
  return this.http.post(API_URL, userDetails).pipe();
}

login(loginDetails:any): Observable<any> {
  let API_URL = environment.REST_API + '/users/login';
return this.http.post(API_URL,loginDetails).pipe();
}

getUsers() : Observable<any> {
  let API_URL = environment.REST_API + '/users/getAllUsers';
  return this.http.get(API_URL).pipe();
}


}