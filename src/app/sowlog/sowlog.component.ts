import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../datafetch.service';

@Component({
  selector: 'app-sowlog',
  templateUrl: './sowlog.component.html',
  styleUrls: ['./sowlog.component.css']
})
export class SowlogComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private datafetch: DataFetchService) { }

  addNSow_URI = 'https://n4nap72xqk.execute-api.us-east-1.amazonaws.com/beta/addnewsow';
  firstRecord: String;
  secondRecord: String;              

  ngOnInit() {
    this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowHdrDetailRecord))
    .subscribe(responseData => {
            console.log(responseData);            
            this.firstRecord = "Submitting Statement of Work Data.. Completed"
     });
     
     this.delay(3000).then(any=>{
      this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowTopHeaderRecord))
      .subscribe(responseData => {
            console.log(responseData);
            this.secondRecord = "Preparing SOW and Project data for selections.. Completed"
     });
 });
    
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

} 
