import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseUsers } from './users.model';
import { HttpClient }  from "@angular/common/http" ;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api/users"

  constructor(private http:HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);

  }

  CreateUsers(request:RequestCreate): Observable<RequestCreate>{
    return this.http.post<RequestCreate>(this.url, request);
  }
}
