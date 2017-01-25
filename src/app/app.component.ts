import { Component } from '@angular/core';
import { StoryService } from './story.service';
import { Story } from './story.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoryService]
})
export class AppComponent {

constructor(private storyService: StoryService) { }
userName = this.storyService.userName;

submit(uName) {
  this.storyService.submitHere(uName);
  console.log(uName);
}


}
