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
* Make it a pixel painter 

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
- [ ] see if need to put code in a function, or not / leave as global in script 
- [X] Make commit 
- [ ] Move on to step 4 (button)
gi
