import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

// Use CASE
// vi opretter et array af User objekter
//version1
// userList: User[] = [
//   {userId:12, firstName:"Palle", lastName:"Lone",  email:"Lars@lars.dk",
//    postalCodeId:1234},
//   {userId:13, firstName:"Jaime", lastName:"englishTheBest",  email:"Lars@lars.dk", postalCodeId:5555, flemsebasse:"blabal"}
// ];



//version2
userList: User[] = [];



// what name does the service have? is it a Nisse?
ngOnInit(){
  // console.log(this.getall());
  // this.userList = this.service.getall();
  // console.log(this.userList);
  // version 3
  // we want to listen on the Observable - with subscribe()
  console.log("dddddddddddd");

  //this.getall3().subscribe(data=>console.log(data));


  this.service.getall3().subscribe(
    data=>{
      console.log("test");

      this.userList=data;
      console.log(this.userList);
    }
  );
}
// getall3():Observable<User[]>{
//   return this.http.get<User[]>("https://localhost:7206/api/Users");
// }

/**
 * Dependency Injection
 */
constructor(private service:UserService, private http:HttpClient) {}




// GetAllUswers - returnerer alle User objekter
getall():User[]{ return this.userList; }
  // public class UserDto
  // {
  //     UserId
  //    FirstName
  //    LastName
  //    Email
  //     PostalCodeId
  // }

}
