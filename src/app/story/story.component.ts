import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from './../story.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  storyId: number = 1;
  storyToDisplay: Story;
  mathNum: number;
  newNum: number;

  goodOption(idNum) {
    this.newNum = idNum + 1;
    if (this.newNum % 2 === 0) {
      this.storyId = this.newNum + 1;
      this.reloadPage();
    } else {
      this.storyId = this.newNum;
      this.reloadPage();
    }
  }

  badOption(idNum) {
    this.newNum = idNum + 1;
    if (this.newNum % 2 !== 0) {
      this.storyId = this.newNum + 1;
      this.reloadPage();
    } else {
      this.storyId = this.newNum;
      this.reloadPage();
    }
  }

  reloadPage() {
    this.storyToDisplay = this.storyService.getStoryById(this.storyId);
  }

  constructor(private storyService: StoryService) {}

  ngOnInit() {
      this.storyToDisplay = this.storyService.getStoryById(this.storyId);
    }

}
