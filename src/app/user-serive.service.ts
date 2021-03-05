import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserSeriveService {

  constructor(private http:HttpClient) { }


  getAllUSsrsData()
  {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users");
  }
}
