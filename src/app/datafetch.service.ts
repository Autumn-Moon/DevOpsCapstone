import { FormGroup } from '@angular/forms';
import { sowHeaderCapturedPayload } from './shareddatamodels.model';


export class DataFetchService {

    sowHeaderFullPayload: sowHeaderCapturedPayload;
    sowMlstneFullPayload: any;
    
    sowTopHeaderRecord: any;
    sowHdrDetailRecord: any;
    sowHdrDetailRecord_Payload: {};
    
    sowMlstneTopHeader: any;
    sowMlstneStatusRec: any;
    submit_sow_and_milestone: any;


    captureSOWFormValues(sowHeaderForm: FormGroup) {
        return this.sowHeaderFullPayload = {
            master_proj_code: sowHeaderForm.value.frm_mstr_prj,
            vbuy_po_nbr: sowHeaderForm.value.frm_vbuy_po,
            sow_nbr: sowHeaderForm.value.frm_sow_nbr,
            sow_name: sowHeaderForm.value.frm_sow_nme,
            sow_owner: sowHeaderForm.value.frm_owner,
            opp_id: sowHeaderForm.value.frm_opp_id,
            pricing_id: sowHeaderForm.value.frm_prc_id,
            vf_counter_sign_date: sowHeaderForm.value.frm_vf_sign_dte,
            wipro_counter_sign_date: sowHeaderForm.value.frm_wip_sign_dte,
            contract_sign_date: sowHeaderForm.value.frm_ctrct_sign_dte,
            contract_start_date: sowHeaderForm.value.frm_ctrct_strt_dte,
            contract_end_date: sowHeaderForm.value.frm_ctrct_end_dte,
            poc_addition: sowHeaderForm.value.frm_poc_add,
            poc_offshore: sowHeaderForm.value.frm_poc_off,
            poc_onsite: sowHeaderForm.value.frm_poc_ons,
            contract_creation: sowHeaderForm.value.frm_contract_crte,
            sow_invc_status: sowHeaderForm.value.frm_invc_stat,
            contract_value: sowHeaderForm.value.frm_ctrct_val,
            sow_invoiced_amount: sowHeaderForm.value.frm_invc_amt,
            sow_remarks: sowHeaderForm.value.frm_sow_rmrks
          }
    }

    createSOWRecords(sow_record_type: String) {
        switch(sow_record_type) {
            case 'sowHdrDetail_Type': 
                // console.log("ALL CASES CONSIDERED");
                this.sowHdrDetailRecord = {
                    ThePayLoad: {
                        Item: {
                            sow_pk: this.sowHeaderFullPayload.sow_nbr,
                            sow_sk: this.sowHeaderFullPayload.master_proj_code,
                            master_proj_code: this.sowHeaderFullPayload.master_proj_code,
                            sow_nbr: this.sowHeaderFullPayload.sow_nbr,
                            sow_name: this.sowHeaderFullPayload.sow_name,
                            sow_owner: this.sowHeaderFullPayload.sow_owner,
                            vbuy_po_nbr: this.sowHeaderFullPayload.vbuy_po_nbr,
                            opp_id: this.sowHeaderFullPayload.opp_id,
                            pricing_id: this.sowHeaderFullPayload.pricing_id,
                            vf_counter_sign_date: this.sowHeaderFullPayload.vf_counter_sign_date,
                            wipro_counter_sign_date: this.sowHeaderFullPayload.wipro_counter_sign_date,
                            contract_sign_date: this.sowHeaderFullPayload.contract_sign_date,
                            contract_start_date: this.sowHeaderFullPayload.contract_start_date,
                            contract_end_date: this.sowHeaderFullPayload.contract_end_date,
                            poc_addition: this.sowHeaderFullPayload.poc_addition,
                            poc_offshore: this.sowHeaderFullPayload.poc_offshore,
                            poc_onsite: this.sowHeaderFullPayload.poc_onsite,
                            contract_creation: this.sowHeaderFullPayload.contract_creation,
                            sow_invc_status: this.sowHeaderFullPayload.sow_invc_status,
                            contract_value: this.sowHeaderFullPayload.contract_value,
                            sow_invoiced_amount: this.sowHeaderFullPayload.sow_invoiced_amount,
                            sow_remarks: this.sowHeaderFullPayload.sow_remarks
                        }
                    }
                };
                break;
            case 'sowTopHeader_Type':
                this.sowTopHeaderRecord = {
                    ThePayLoad: {
                        Item: {
                            sow_pk: this.sowHeaderFullPayload.master_proj_code,
                            sow_sk: this.sowHeaderFullPayload.sow_nbr,
                            master_proj_code: this.sowHeaderFullPayload.master_proj_code,
                            sow_nbr: this.sowHeaderFullPayload.sow_nbr,
                            sow_name: this.sowHeaderFullPayload.sow_name,
                            sow_owner: this.sowHeaderFullPayload.sow_owner
                        }
                    } 
                };
                break;
        }

    }

    captureAction(milestone_wth_sow: Boolean) {
        this.submit_sow_and_milestone = milestone_wth_sow;
    }

    captureMilestoneFormValues(milestoneForm: FormGroup) {
        return this.sowMlstneFullPayload = {
            milestone_name: milestoneForm.value.frm_mlstne_nme,
            milestone_date: milestoneForm.value.frm_mlstne_dte,
            milestone_tot_amt: milestoneForm.value.frm_mlstne_amt,
            milestone_invcd_amt: milestoneForm.value.frm_mlstne_invc_amt,
            milestone_invc_month: milestoneForm.value.frm_mlstne_invc_mon,
            master_remarks: milestoneForm.value.frm_mlstne_rmrks
          }
    }
    
    createMilestoneRecords(mls_record_type: String) {
        switch(mls_record_type) {
            case 'sowMlstneHdr_Type':        
                this.sowMlstneTopHeader = {
                    ThePayLoad: {
                        Item: {
                            sow_pk: this.sowHeaderFullPayload.sow_nbr,
                            sow_sk: this.sowMlstneFullPayload.milestone_name,                  
                            sow_nbr: this.sowHeaderFullPayload.sow_nbr,
                            milestone_name: this.sowMlstneFullPayload.milestone_name,
                            milestone_date: this.sowMlstneFullPayload.milestone_date,
                            milestone_tot_amt: this.sowMlstneFullPayload.milestone_tot_amt,
                            milestone_invcd_amt: this.sowMlstneFullPayload.milestone_invcd_amt,
                            milestone_invc_month: this.sowMlstneFullPayload.milestone_invc_month,
                            master_remarks: this.sowMlstneFullPayload.master_remarks
                        }
                    }
                };
                break;
            case 'sowMlstneStatus_Type':
                this.sowMlstneStatusRec = {
                    ThePayLoad: {
                        Item: {    
                            sow_pk: this.sowMlstneFullPayload.milestone_name,
                            sow_sk: this.sowHeaderFullPayload.sow_nbr,                                             
                            milestone_name: this.sowMlstneFullPayload.milestone_name,
                            sow_nbr: this.sowHeaderFullPayload.sow_nbr,
                            milestone_date: this.sowMlstneFullPayload.milestone_date
                        }
                    }
                }
                break;
        }
    }

}