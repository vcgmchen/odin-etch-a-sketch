# Etch-a-sketch

## problem statement: 
A webpage containing a grid of squares, where hovering over any square with the mouse causes the square to change to a random colour. 
The size of the grid can be set by the user by clicking a button that allows them to enter a number (e.g. entering "5" creates a 5x5 square grid).

## skills: 
*DOM manipulation

## silly mistakes log: 
* not putting "defer" in script tag in head => any time there's DOM manipulation involved, first thing to do is put defer in script tag!!!  

## thought process log: 
* it can be useful to write up the HTML first, what the actual HTML should look like, before going and coding the JS function that's supposed to produce the HTML code automatically 
* i don't need a reference to each indiivudal div square, so it makes sense to skip caching the reference in a variable, and perform the create element function within the append child funciton 

## future work 
* Click effect - erase 
* Draw mode vs erase mode buttons 
* Colour palette selection buttons 
* Make it a pixel painter - paint via clikc, not hover 
    * Pixel painter that can save canvases as snapshots to a gallery  

## reflection
In this project, I got a better feel for my own system of development 
a) git: plannig out commits 
b) comments: gradual development in comments in files
c) readme: to do list, other notes to self

---
## todo 
phase 3 pseudocode: 
hover over squares -> change background color 
to do:
- [X] read about hover events 
- [X] read about event bubbling
- [ ] read about removing event listeners?
Q: should I make multiple commits for each progressive improvement on the hover step?
- [X] Take notes on git commit philosophies
- [ ] Plan out commit(s) for current step (step 3)  
- [X] see if need to put code in a function, or not / leave as global in script 
- [X] see if need to put code in a function, or not / leave as global in script 
- [X] Make commit 
- [X] Move on to step 4 (button)

phase 5:
- [X] Add validation for button: max size 100 
- [X] Make height & width of divs to be variable so that total grid size always 960px, and size of squares is what varies: formula height = width = 960px/size. --> must dynamically set inline css in js file 

phase 6:
- [ ] Clean up code (remove extraneous comments) 

phase 7:
- [ ] EC1: randomize RGB value with each hover
- [ ] EC2: progressive darkening effect by 10% with CSS opacity value 

