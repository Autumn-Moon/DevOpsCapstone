export interface Post{
user_id: String;
crud_date: number;
}

export interface sowHeaderCapturedPayload {
    master_proj_code: String,
    vbuy_po_nbr: String,
    sow_nbr: String,
    sow_name: String,
    sow_owner: String,
    opp_id: String,
    pricing_id: String,
    vf_counter_sign_date: Date,
    wipro_counter_sign_date: Date,
    contract_sign_date: Date,
    contract_start_date: Date,
    contract_end_date: Date,
    poc_addition: String,
    poc_offshore: Number,
    poc_onsite: Number,
    contract_creation: String,
    sow_invc_status: String,
    contract_value: Number,
    sow_invoiced_amount: Number,
    sow_remarks: String
}