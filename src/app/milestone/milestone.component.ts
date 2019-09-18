import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../datafetch.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {

  constructor(private datafetch: DataFetchService,
              private http: HttpClient,
              private _fb: FormBuilder) { }

  milestoneForm: FormGroup;
  addMilestoneClicked = false;
  submitSOWClicked = false;
  index = 0;
  getProj_URI = 'https://n4nap72xqk.execute-api.us-east-1.amazonaws.com/beta/getprojects';
  addNSow_URI = 'https://n4nap72xqk.execute-api.us-east-1.amazonaws.com/beta/addnewsow';

  ngOnInit() {
    this.createMilestoneForm();
  }

  createMilestoneForm() {
    this.milestoneForm = this._fb.group({
      milestones: this._fb.array([this.plusMilestoneForm()])
    });
    // new FormGroup({});
    // const milestoneFormGroup = new FormGroup({
    //   'frm_mlstne_nme'      : new FormControl(null,Validators.required),
    //   'frm_mlstne_dte'      : new FormControl(null,Validators.required),
    //   'frm_mlstne_amt'      : new FormControl(null,Validators.required),
    //   'frm_mlstne_invc_amt' : new FormControl(null,Validators.required),
    //   'frm_mlstne_invc_mon' : new FormControl(null,Validators.required),
    //   'frm_mlstne_rmrks'    : new FormControl(null,Validators.required)
    // });

    // milestones: new FormArray([milestoneFormGroup]);
    // (<FormArray>this.milestoneForm.get('milestones')).push(this.milestones); 
  }

  plusMilestoneForm() {
    return this._fb.group({
      frm_mlstne_nme: [],
      frm_mlstne_dte: [],
      frm_mlstne_amt: [],
      frm_mlstne_invc_amt: [],
      frm_mlstne_invc_mon: [],
      frm_mlstne_rmrks: []
    });
  }

  addplusMilestonForm() {
    this.milestoneArray.push(this.plusMilestoneForm());
  }

  removeMilestonForm(index) {
    if(index!=0) {
      console.log(index);
      this.milestoneArray.removeAt(index);
    }
    
  }

  get milestoneArray() {
    return <FormArray>this.milestoneForm.get('milestones');
  }

  onCreateMilestone() {
    //Capture all values from Milestone Form
    this.datafetch.captureMilestoneFormValues(this.milestoneForm);

    //If Milestone Button Clicked, navigate to Milestone Component
    if(this.addMilestoneClicked) {
      // this.router.navigate(['../milestone'],{relativeTo: this.route});
    }
    else {
        //If Add SOW Button Clicked, then create SOW Records for inserting data into DynamoDB Table
        if(this.submitSOWClicked) {
          this.datafetch.createMilestoneRecords("sowMlstneHdr_Type");
          this.datafetch.createMilestoneRecords("sowMlstneStatus_Type");
          this.datafetch.createSOWRecords("sowHdrDetail_Type");
          this.datafetch.createSOWRecords("sowTopHeader_Type");

          this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowHdrDetailRecord))
          .subscribe(responseData => {
                  console.log(responseData);
           });

          this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowTopHeaderRecord))
          .subscribe(responseData => {
                  console.log(responseData);
           });
           this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowMlstneTopHeader))
           .subscribe(responseData => {
                   console.log(responseData);
            });
 
           this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowMlstneStatusRec))
           .subscribe(responseData => {
                   console.log(responseData);
          });           

        }
    }
  }

  submitSOWMlstne() {
    this.submitSOWClicked = true;
  }
  

}
