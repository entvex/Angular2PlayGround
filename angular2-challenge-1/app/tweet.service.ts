export class TweetService {
    getTweets() {
        return [
            {
                imageUrl: "http://lorempixel.com/100/100/people?1",
                author: "Hendrerit",
                body: "Donec eu suscipit lectus, et mollis elit. Fusce gravida, magna non auctor condimentum",
                totalLikes: 0,
                iLike: false
            },
            {
                imageUrl: "http://lorempixel.com/100/100/people?2",
                author: "Ipsum",
                body: "Ne usu fabulas laoreet. Ne ius alterum reprimique, in vix choro qualisque, id corrumpit splendide",
                totalLikes: 5,
                iLike: true
            },
            {
                imageUrl: "http://lorempixel.com/100/100/people?3",
                author: "Turpis",
                body: "Aliquam in enim in turpis suscipit congue tincidunt sit amet ligula",
                totalLikes: 1,
                iLike: true
            }];
    }
}