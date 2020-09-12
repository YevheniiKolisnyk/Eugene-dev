import { trigger, transition, useAnimation, } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';

export const shadowAnimations =[
trigger('fadeIn', [
  transition('void => *', useAnimation(fadeIn),{
  params: {
    timing: 0.2
  }
})]),
trigger('fadeOut', [
  transition('* => void', useAnimation(fadeOut),{
  params: {
    timing: 0.2
  }
})])
]

