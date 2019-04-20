import { StringMapWithRename } from '@angular/core/src/render3/jit/compiler_facade_interface';

export class Interview { 
    jobName: string;
    jobType:string;
    jobCompany:string;
    userName:string;
    accepted:string;
    expUseful:string;
    difficulty:string;
    comment:string;
    rating:number


    constructor(jobName: string,jobType:string,jobCompany:string,userName:string,rating:number,accepted:string,expUseful:string,diffculty:string,comment:string) { 
        this.jobName = jobName;
        this.jobType=jobType;
        this.jobCompany=jobCompany;
        this.userName=userName;
        this.accepted=accepted;
        this.expUseful=expUseful;
        this.difficulty=diffculty;
        this.comment=comment;
        this.rating=rating;

        } 
    

}