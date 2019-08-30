import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('postForm', { static: false }) signupForm: NgForm;
  title = 'SOWTracker';
  sowFullData= {
    user_id: String,
    crud_date: String,
    user_name: String
  };

  upData= {
    user_id: String,
    crud_date: String    
  };

  downData= {
    get_id: String,
    get_curd: String,
    get_nme: String
  };


  constructor( private http: HttpClient) {}
  ngOnInit(){
    // ...
  }

  InflateSOW(){
    // ...
  }

  AddProj(){
    // ...
  }



  /* onCreatePost(sowData: NgForm) {

    console.log(sowData);
    this.sowFullData={
      user_id: sowData.value.userid,
      crud_date: sowData.value.crud,
      user_name: sowData.value.usernme
    }
    console.log(this.sowFullData);
    this.http.post<{name: String}>('https://3z2wavke7e.execute-api.us-east-1.amazonaws.com/beta/compareYourself', 
    this.sowFullData)
    .subscribe(responseData=>{
    console.log(responseData);
    // this.getPost();
   })
  }
  
  getPost(upData: Post) {
    console.log("getPost");
    // console.log(this.signupForm);
    // this.upData = {
        upData.user_id = this.signupForm.value.userid,
        upData.crud_date = this.signupForm.value.crud
    // }
    console.log(upData);
    // this.http.post<{name: String}>('https://3z2wavke7e.execute-api.us-east-1.amazonaws.com/beta/getdata', 
    // this.upData)
    // .pipe(map(responseData=>{

    // }))
    // .subscribe(responseData=>{
    //   console.log("GetResponse");
    //   console.log(responseData);      
    // })
  } */
}
