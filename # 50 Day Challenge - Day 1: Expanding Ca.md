# 50 Day Challenge - Day 1: Expanding Cards

This effect works best for wide images, so that when the card is expanded there's a surprise for the viewer. 
I tried this first with images that were taller than they were wide but realised there's no point in expanding them if most of the image can already be seen before expanding the images. 

## What I learned:

- An easy way to upload images (right click 'copy image link') and to code them, using a div and giving it a style with the background-image url loaded. 

- Using the background properties to display the background image properly: e.g. background-

- using 'flex: ; ' as a way to set the width of flex items. 

- Transition Property

### Transition Property:

transition: ;

This is shorthand for transition-property, transition-duration, transition-timing-function, and transition-delay.

- transition-property = Which property the transition needs to apply to. In my case, the transition was being applied to the opacity of the active h3. 
- transition-duration = self-explanatory. 
- transition-timing-function = the visual effect of the transition, which is either: linear, ease-in, cubic, or steps. See: [Transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- transition-delay = delays the start of the transition, which was useful in this case because it allowed for the gallery__image to reach a certain width appropriate for the h3 to come into play. 