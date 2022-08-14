# Dots Game

To run this game

- `npm install`
- `npm run build` to build the assets
- `npm run start` to start the server

# Mobile or Desktop Application

`Mobile`

- Mobile application includes desired behaviour as per requirement
- Start button to start the game and it toggles to Pause
- Use same button 'Pause' to pause the game
- Slider Range to control the falling speed to dots

`Desktop`

- Desktop application includes all above features with the flexibility to reset everything on the game on click of 'Reset' button
- Additional Game Mode drop down to play the game in normal or competition mode
- A timer(of 10 sec, and is configurable by the user) will display if the user plays the game in competition mode
- If the user scores the given points in the given time, a modal overlay will be displayed with the winning message. (For example: You have to score 15 points in 10 secs to win the game)

# Handling State

- Created a singleton instance of the Game store to use it as a single source of truth across the application
- For React application, I could have used React's context api

# How to decide the winner?

- There is feature to play the game in competition mode which can be selected from Game Mode select box
- Once you start the game in Competition mode, the timer will start and you've to score the specified score given in the config
- The time and score which decides the winning part of the game are fully configurable and can be passed by the user when he initiate the game. (Configurable)

# Test cases

- Setup of test cases is done
- Includes Test cases for the basic behavior of the application and can be extended further

# Configuration

- A user can decide the winning config of the game i.e how much points are needed in the given time to decide the winner
- A user can decide when a new dot should also appear
- A user can decide the initial size of the ball
- Constant config from the constant file is configurble and can be overwrite when initialize the game

# Build Tool

- As the application is small and the requirtements are pretty straight forward, I've used Parcel to build the assets of the application, as it is zero config and pretty fast as compared to other build tools.

Note: Feel free to reach out to me incase if you find any difficulty to start or understand the game/code
