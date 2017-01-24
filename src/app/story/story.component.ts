import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from './../story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit {
  storyId: number = 3;
  storyToDisplay: Story;

  constructor(private storyService: StoryService) {}

  ngOnInit() {
      this.storyToDisplay = this.storyService.getStoryById(this.storyId);
    }

}
