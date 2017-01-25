import { Story } from './story.model';
import { StoryService } from './story.service';

export const STORIES: Story[] = [
  new Story(this.userName + "You are lost in the woods. What will you do?", "Run away", "Curl into ball", 1),
  new Story("You curled into a ball and bear ate ya", "Fight the bear", "be teh bears bitch", 2),
  new Story("your safe! But still lost...", "build a fire", "try to itch yourself with spikey stick", 3),
  new Story("You're all scratched up! Ouch!", "identify leaves to safely help the wounds", "grasp for something --anything to help with the pain", 4),
  new Story("Soothing! It feels warm to your skin. Its the next day and the sun is just rising. You're quite thirsty and you think you hear a waterfall.", "Cautiously proceed towards the sound, crouching alone the way, careful where you step.", "Run frantically towards the sound screaming-- WATER!!!", 5),
  new Story("You stumble over yourself and hit your head on a rock", "stay down for a minute and regain your demeanour.", "Someone could hear you and attack! Quickly get up and keep running", 6),
  new Story("While on the ground you now crawl towards the sound of water. You clear a small hill and see a creek, with a few men on the bank.", "You're pretty thirsty, and these people could save you, but you're not too sure yet about them. You wait to see if there's any reason you shouldn't trust them.", "People! SAVIORS! You run towards your freedom!", 7),
  new Story("You run down to the bank of a creek to mysterious men who turn and shoot at you thinking you're a bear.", "Lay flat on the ground to get out of line of sight of bullets until they realize youre not a bear.", "Well screw them! If they think you're a bear YOULL BE A BEAR! RAWRR!!!!", 8),
  new Story("The men eventually see you clearly by their own means and decide you're not a threat to them. They offer you food and a ride home! YOURE SAFE!", "", "", 9),
  new Story("You get shot and die. Idiot...", "", "", 10)


];
