import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// this is our entry to API
export class UserService {
//URL
// API has to run!! CORS in Program.cs
url: string = "https://localhost:7206/api/Users";
url2: string = "https://localhost:7206/api/ffff";

//JSON eller XML - formatters
//GET, POST, PUT, DELETE

// version 1 - Hardcoded!
getall():User[]{ return [
  {userId:12, firstName:"Palle", lastName:"Lone",  email:"Lars@lars.dk",
   postalCodeId:1234},
  {userId:13, firstName:"Jaime", lastName:"englishTheBest",  email:"Lars@lars.dk", postalCodeId:5555}
] }

userList:User[] = [
  {userId:12, firstName:"Palle", lastName:"Lone",  email:"Lars@lars.dk",
   postalCodeId:1234},
  {userId:13, firstName:"Jaime", lastName:"englishTheBest",  email:"Lars@lars.dk", postalCodeId:5555}
];

// // version 2 - Hardcoded!
 getall2():User[]{ return this.userList; }
// // version 3 - Hardcoded!


getall3():Observable<User[]>{
  return this.http.get<User[]>(this.url);
}

delete(idToDelete:number):void{
  this.http.delete(this.url+"/"+idToDelete);
}



// getAll(): Observable<Gulerodentity[]>{
//   return this.http.get<Gulerodentity[]>(this.urlNew);
// }

  constructor(private http:HttpClient) { }
}  // let data = this.http.get<User[]>(this.url);
// console.log(data);

/******************  Genre *************************** */

/******************  Genre *************************** */
// abstraction - en functionalitet hver
// MEEN har vi egengtligt oprettet abstraction =>
// Hvornår er det rigtigt smart??
// Predicate => Delegates => Func => I forbindelse med Annonymeous methods (Action is the last)


// 1-3 Models
// 1-3 Components
// 2-3 get metoder (2 - delete eller getById)
