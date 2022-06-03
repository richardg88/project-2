# Rock, Paper, Scissors Game

The Rock, Paper Scissors game has been created for a single user to play against the computer. It has been built using simple JavaScript, HTML and CSS to ensure a clean and fast loading game. Scores are shown for both the user and computer ensuring their is a sense of competetiveness, also engaging the user to continue and remain engaged.

## Responsiveness

The responsiveness has been tested using the site [Am I Responsive](https://ui.dev/amiresponsive) It showed the game works perfectly across all devices.
![Responsiveness](assets/images/responsivness-project2.png)

## Features

Inthis section I shall explain the different features of the game and how it benefits the users.

* #### Game Title

The header part of the game immediatly tells the user what game they are about to play.

![Game Title](assets/images/header-project2.png)

* #### Score Area

The score area shows both the user and computers scores. It will change as the game goes on and ensures the user is engaged within the game.

![Score Area](assets/images/score-area-project2.png)

* #### Game Results Area

This section of the game shows what the user chose either rock, paper or scissors and shows the users if they have won, lost or drew, including what the computer chose.

![Game Results Area](assets/images/says-who-one-area-project2.png)

* #### Player Choices Area

The player choices area of the game show three images, fist to show a rock, palm to show paper and a scissor hand image to show scissors. The player can click on either to make a choice. If the users wins then the image will glow green, if the users loses the image will glow red and if the user chooses the same as the computer, then it will glow grey.

![Player Choice Area](assets/images/game-choices-area-project2.png)

## Testing

The code has been tested to show the HTML runs with no errors, that the CSS runs with no errors and that the JavaScript runs with no errors. All areas run well showing no errors as expected.

### Validator Testing

* #### HTML

When the site was run through the [WS3 Validator](https://validator.w3.org/) no errors were shown as shown in the image below.
![HTML Validator](assets/images/html-validator-project2.png)

* #### CSS

The site was run through the [Jigsaw Validator](https://jigsaw.w3.org/css-validator/) and showed no errors as shown in the image below.
![CSS Validator](assets/images/css-validator-project2.png)

* #### JavaScript

The site was run through the [Jshint Validator](https://jshint.com/) and returned no errors with the following metrics
* There are 12 functions in this file.
* Function with the largest signature take 2 arguments, while the median is 0.
* Largest function has 7 statements in it, while the median is 1.5.
* The most complex function has a cyclomatic complexity value of 10 while the median is 1.
![JavaScript Validator](assets/images/js-validator-project2.png)

* #### Lighthouse Test

The site was tested for performance, best practices and accessibility using Google Lighthouse. All reports game back excellent as shown in the image below.
![Google Lighthouse Report](assets/images/lighthouse-validator-project2.png)

## Deployment

The site was deployed to GitHub pages. The steps are as follows:
* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Master Branch
* Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://richardg88.github.io/project-2/

## Credits

The inspiration for the game, code, images and fonts were from the following:

### Code 
* Inspiration for the game and code used in this game was used from [Free Code Camp](https://www.freecodecamp.org/)

### Media
* Images used in this game were created using [Canva](https://www.canva.com/)

### Content
* Font used in the game creation was created using [Google Fonts](https://fonts.google.com/)

## Bugs
During the JavaScript validation, i found several semicolon errors showing. This was rectified buy adding the comments  
/*jshint esversion: 6 */ /*jshint -W033 */ to the begining of the JavaScript file.
