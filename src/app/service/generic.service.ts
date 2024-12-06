import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// when you use create HttpCLient => then it might be important to use this
// atm it is standard to communication by JSON
const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<GulerodsEntity> {
  url: string = "https://localhost:7206/api/";

  // private sets http as a class variable
  constructor(private http:HttpClient) { }

  getAlls(endPoint:string):Observable<GulerodsEntity[]>{
    return this.http.get<GulerodsEntity[]>(this.url+"/"+endPoint);
  }

  //"https://localhost:7206/api/Users/4";
  delete(idToDelete:number,endPoint:string):Observable<GulerodsEntity>{
    return this.http.delete<GulerodsEntity>(this.url+"/"+endPoint+"/"+idToDelete);
  }

      //return this.http.post(url+??,data,httpOptions);
}
