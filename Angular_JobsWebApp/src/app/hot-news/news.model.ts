export class Article { 
    title: string;
    abstract: string;
    votes: number;
    link: string;
    imgURL: string; 

    constructor(title: string, abstract: string, link: string, imgURL: string, votes?: number) { 
        this.title = title;
        this.abstract = abstract;
        this.link = link;
        this.imgURL = imgURL;
        this.votes = votes || 0;
        } 
    
        voteUp(): void {
            this.votes += 1;
        }
    
        voteDown(): void {
            this.votes -= 1;
        }
    
        domain(): string {
            return '';
        }
}