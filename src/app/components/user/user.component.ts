import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
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
cityNames: string[] = ["Aalborg", "Aarhus", "Odense", "København"];
imagePath = '/img/stars.png';


// HTML Forms - Reactive Forms
userForm:FormGroup = new FormGroup({
  // userId : new FormControl(),
  firstName : new FormControl('',[Validators.required]), // validators
  lastName : new FormControl(),
  email : new FormControl(),
  postalCodeId : new FormControl(),
  // genre: new FormGroup({
  // })
});

onSubmit():void{
  console.log(this.userForm.get('firstName')?.value);
  if(this.userForm.valid){
    console.log("Form is valid");
    console.log(this.userForm.value);
  }
    // this.service.create(this.userForm.value).subscribe(data=>console.log(data));
}

JuleNisse(idToDelete:number):void{
  //invoke our delete method from our service
  console.log("deleting");
  console.log(idToDelete);


 // this.service.delete(1);
 // this.service.delete(idToDelete

}

hat(temp:string):void{
}


// what name does the service have? is it a Nisse?
ngOnInit(){
this.hat("test");
// this.hat(test);

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

  /***** DROP DOWN CLICK!! */
  dropDownOnChange(event : any){
    console.log("clicked");
    console.log(event.target.value);
  }

}
