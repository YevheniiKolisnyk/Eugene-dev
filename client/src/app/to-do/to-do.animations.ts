import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn, bounceOut } from 'ng-animate';
export const toDoAnimations = [
  trigger('toDoAnim', [
    transition('void => *' , useAnimation(bounceIn),{
      params: {
        timing: 1,
      }
    }),
    transition('* => void', useAnimation(bounceOut),{
      params: {
        timing: 1
      }
    })
  ])
]
