import { Injectable } from '@angular/core';
import { Story } from './story.model';
import { STORIES} from './stories';
import { AppComponent } from './app.component';

@Injectable()
export class StoryService {



  constructor() { }

  getStories( ) {
    return STORIES;
  }

  userName = [];

  submitHere(uName) {
    this.userName.pop();
    this.userName.push(uName);
    console.log(this.userName[0]);
  }




  getStoryById(storyId: number){
    for (var i = 0; i <= STORIES.length - 1; i++) {
      if (STORIES[i].id === storyId) {
        return STORIES[i];
      }
    }
  }

}
