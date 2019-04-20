

export class CompanyPage { 
    companyName: string;
    logoURL: String;
    webURL:String;
    cLocation:String;
    rating:number;
    salaries:number;
    interviews:number;
    solgan:String;
    description:String;
    hot:number;

    constructor(companyName: string,
        logoURL: String,
        webURL:String,
        cLocation:String,
        rating:number,
        salaries:number,
        interviews:number,
        solgan:String,
        description:String,
        hot:number,) { 
        this.companyName = companyName;
        this.logoURL=logoURL;
        this.webURL=webURL;
        this.cLocation=cLocation;
        this.rating=rating;
        this.salaries=salaries;
        this.interviews=interviews;
        this.solgan=solgan;
        this.description=description;
        this.hot=hot || 0;

    }

    voteUp(): void {
        this.hot += 1;
    }
}