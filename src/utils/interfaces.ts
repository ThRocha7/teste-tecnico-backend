export interface postIntention {
  zipcode_start: string;
  zipcode_end: string;
}

export interface postLead {
  name: string;
  email: string;
}

export interface putIntention {
  lead_id: string;
}
