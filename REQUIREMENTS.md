# Simon Says

Simple game of random selection and hand/eye coordination.

## General Overview

When the page loads, there should be a wheel of 4 different colors on the page. One color should be 'highlighted'. If the user clicks on the highlighted color, a new color should be highlighted and the color that was just clicked returns to its normal state. As long as the user keeps clicking on the correct color, the game continues. As soon as the user clicks on a color that is not high lighted, the game is over.

## Basic Technical Goals

- Layout a circle with 4 quadrants
  - Best to use a container that acts as a flexbox
  - 4 `div`s inside of the container, each at 50% width so that it wraps to 2 rows
  - Each div will have an `id` with it's color and a class of `quadrant`
  - Use `border-radius-top-left`, etc to set all 4 corners to rounded
- On page load, set click listeners on each quadrant to listen for a click
- Create a function that selects a random color from the available colors and applies a class of `active` to that quadrant
  - will need to have an array of available colors (should match the `id`s on your divs)
  - you can use getElementById(color_variable) with a variable
  - save the color_variable so we can compare that against what was clicked on
- When a quadrant is clicked, see if it matches the color that was just clicked on
  - if it does, call the function to set a few color as active
  - if it doesn't they lose and you can show them an alert

## Extended Technical Goals
- Use localStorage to keep track of longest correct streaks

## Advanced Technical Goals
- Add a clock to the game so we can derive 'correct clicks per minute'
  - More of an accurate measure of if the user is good at the game since you could just go reallllllly slow and be good at it
