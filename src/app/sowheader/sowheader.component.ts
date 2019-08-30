import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Projects } from './sowmodels.model';
import { map } from 'rxjs/operators';
import { DataFetchService } from '../datafetch.service';


@Component({
  selector: 'app-sowheader',
  templateUrl: './sowheader.component.html',
  styleUrls: ['./sowheader.component.css']
})
export class SowheaderComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private datafetch: DataFetchService) { }

      loadedPosts: Projects[] = [];
      sowHeaderForm: FormGroup;
      addMilestoneClicked = false;
      addSOWClicked = false;

      getProj_URI = 'https://n4nap72xqk.execute-api.us-east-1.amazonaws.com/beta/getprojects';
      addNSow_URI = 'https://n4nap72xqk.execute-api.us-east-1.amazonaws.com/beta/addnewsow';
      
      ngOnInit() {
        this.createSOWForm();
        this.getProjectsList();
      }
      
      createSOWForm() {
        this.sowHeaderForm = new FormGroup({
          'frm_mstr_prj'       : new FormControl('Choose Project',Validators.required),
          'frm_vbuy_po'        : new FormControl(null,Validators.required),
          'frm_sow_nbr'        : new FormControl(null,Validators.required),
          'frm_sow_nme'        : new FormControl(null,Validators.required),
          'frm_owner'          : new FormControl(null,Validators.required),
          'frm_opp_id'         : new FormControl(null,Validators.required),
          'frm_prc_id'         : new FormControl(null,Validators.required),
          'frm_vf_sign_dte'    : new FormControl(null,Validators.required),
          'frm_wip_sign_dte'   : new FormControl(null,Validators.required),
          'frm_ctrct_strt_dte' : new FormControl(null,Validators.required),
          'frm_ctrct_end_dte'  : new FormControl(null,Validators.required),
          'frm_ctrct_sign_dte' : new FormControl(null,Validators.required),
          'frm_poc_add'        : new FormControl(null),
          'frm_poc_off'        : new FormControl(null),
          'frm_poc_ons'        : new FormControl(null),
          'frm_contract_crte'  : new FormControl(null,Validators.required),
          'frm_invc_stat'      : new FormControl(null,Validators.required),
          'frm_ctrct_val'      : new FormControl(null),
          'frm_invc_amt'       : new FormControl(null),
          'frm_sow_rmrks'      : new FormControl(null)
        });
        
      }

      onCreateSowHdr() {
        //Capture all values from SOW Form
        this.datafetch.captureSOWFormValues(this.sowHeaderForm);        

        //If Milestone Button Clicked, navigate to Milestone Component
        if(this.addMilestoneClicked) {
          this.router.navigate(['../milestone'],{relativeTo: this.route});
        }
        else {
            //If Add SOW Button Clicked, then create SOW Records for inserting data into DynamoDB Table
            if(this.addSOWClicked) {
              this.datafetch.createSOWRecords("sowHdrDetail_Type");
              this.datafetch.createSOWRecords("sowTopHeader_Type");
              console.log(JSON.stringify(this.datafetch.sowHdrDetailRecord));
              this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowHdrDetailRecord))
              .subscribe(responseData => {
                      console.log(responseData);
               });

              this.http.post(this.addNSow_URI,JSON.stringify(this.datafetch.sowTopHeaderRecord))
              .subscribe(responseData => {
                      console.log(responseData);
               });
            }
        }
      }

      addMilestone() {
        this.addMilestoneClicked = true;
      }

      addSOW() {
        this.addSOWClicked = true;
      }

// Below method extracts the List of available projects from DynamoDB and populates the Option element in 
// SOW Header Component HTML display page..
   getProjectsList() {
    this.http.get<Projects>(this.getProj_URI)
    .pipe(
      map(responseData=>{
        const projArray = [];
        for (const key in responseData) {
          projArray.push({...responseData[key]});
        }
        return projArray;
      })
    )
    .subscribe(projects => {
      console.log("came here");
      this.loadedPosts=projects;
      console.log(this.loadedPosts);
    });
}
}  
