export class job {
    jobId : String;
    name : String;
    priority : { type: Number, default: 5 };
    title : String;
    bookmarkedOn : { type: Date };
    createdAt : Date;
    description : String;
    location : String;
    type : String;
    howToApply : String;
    url : String;
    companyID : String;
    userId : String; 
  }