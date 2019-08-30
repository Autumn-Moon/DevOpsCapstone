import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projectlanding',
  templateUrl: './projectlanding.component.html',
  styleUrls: ['./projectlanding.component.css']
})
export class ProjectlandingComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  projJSON: {
    proj_code: String,
    rec_type: String
  }
  
  addProj_URI = 'https://n4nap72xqk.execute-api.us-east-1.amazonaws.com/beta/addproj';                 

  ngOnInit() {
  }

  OnCreateProject(userdata: NgForm) {
    this.projJSON = {
      proj_code: userdata.value.frm_prj_val,
      rec_type: 'PROJECT'
    }

    console.log(JSON.stringify(this.projJSON));
    this.http.post(this.addProj_URI,JSON.stringify(this.projJSON))
    .subscribe(responseData => {
      console.log(responseData);
    });

  }
  
  addSow() {
    this.router.navigate(['sow'], {relativeTo: this.route});
  }

  updateMilestone() {
    this.router.navigate(['milestone'], {relativeTo: this.route});
  }

  genDashboard() {
    this.router.navigate(['dashboard'], {relativeTo: this.route});
  }

  uploadSOW() {
    this.router.navigate(['log'], {relativeTo: this.route});
  }
}
