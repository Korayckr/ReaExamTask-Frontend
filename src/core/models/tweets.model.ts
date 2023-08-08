


export class Tweets {
    id: number = 0;
    userId: number = 0;
    userName: string = '';
    tweetHeader: string = '';
    tweetDesc: string = '';
    tweetLikes: number = 0;
    createdAt: Date;


    constructor(createdAt: Date) {
        this.createdAt = createdAt;
    }

}