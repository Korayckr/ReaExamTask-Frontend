import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Router } from "@angular/router";
import { Tweets } from 'src/core/models/tweets.model';
import { User } from 'src/core/models/user.model';
import { TweetRequest } from 'src/core/models/request/addTweet-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class HeroComponent implements OnInit  {
  public tweetRequest: TweetRequest = <TweetRequest>{}

  likeTweets: Tweets | null = null;

  constructor(private readonly apiService: ApiService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService

  ) { }

  tweets: Tweets[] = [];

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.apiService.getAllEntities(Tweets).subscribe((response) => {
      this.tweets = response.data;
      console.log(this.tweets)
    });
  }

  /*  likeTweet(id: number) {
     tweets.tweetLikes++; // Önce yerel olarak beğeni sayısını artırabilirsiniz
     this.apiService.updateEntity(tweet.id, tweet, Tweets).then(response => {
       // API'den dönen yanıtı işleme alabilirsiniz
       console.log('Tweet beğenildi.', response);
     }).catch(error => {
       console.error('Tweet beğenme işleminde hata oluştu.', error);
     });
   } */


   onCreate(entity: TweetRequest) {
    this.createEntity<TweetRequest>(entity, 'House').then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Ev ekleme başarılı', life: 3000 });
      }
    });
  }

  createEntity<TEntity>(entity: TEntity, entityType: string) {
    return this.apiService.createEntity<TEntity>(entity, entityType);
  }


  

    

}
