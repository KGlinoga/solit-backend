# solitbackend
Backend for SoLit Project 3 app! 

See this GitHub Repo for the Front End: 
https://github.com/KGlinoga/solit

# soLit
## For booklovers everywhere!

## Description

So Lit is a social book reviewing site that was born of a desire for a better way for biblophiles to engage with their books and community on a more nuanced level than a single 5-star rating.  Folks for whom books mean more than just a single 5-star rating.  What even is a 2-star book?? 

### 

## Usage

### Users will be taken to a website that prompts for their login information or prompts them to sign up. Afterwards, Users will be taken to a homepage where they can see the top books on the New York best-sellers list. Users can also search for a specific book in the search bar and it will display the book information along with all the reviews attached to it. User can add books to their shelves and also review books on their shelf. 

## Features

### Features include:
### Login/Logout/Sign-up functionality
### Accounts and certain functions protected by JSON WebTokens
### Submitting User Input (user leaves reviews on books and user can add books to their shelf)
### Uploading images (user can add a profile picture) 
### User can use search-bar to specifically search for books

## Technologies 

### GitHub was used to clone a new repository onto a computer. Visual Studio Code was used to create andMVC and to create files such as JS, SQL, and React files. GitBash Terminal was used to git add/commit/push edits made from the local repository into GitHub to update the repository.

JSON Web Tokens and bcrypt to secure both passwords and accounts are used. 

## Installation

### Tools needed are GitHub to name and clone the repository into a local computer/repository. GitBash Terminal should be installed and one can clone repository with either an SSH key or the HTML URL and with the command-”git clone”-and copying in the URL or SSH key, upload to Terminal-making sure they are not within another folder but in the main branch-and using the commands git add . (press enter) then git commit -m "detailed description of your edits" (press enter) then git push (press enter) and enter their SSH key if prompted. 

### A new folder should be created and once Visual Studio Code is installed, open the new folder in VS and make new JS, SQL, and React files. Run the following commands to install required packages; npm i sequelize, npm i express, npm i bcrypt, npm i connect-session-sequelize, npm i dotenv, npm i express-handlebars, npm i express-session and npm i mysql2 package from the mysql docs and once installed, run the command mysql -u root -p and enter your password once prompted. Afterward, in the terminal where mysql is loaded, initialize the database by running SOURCE db/schema.sql and then you can exit and return to the server.js where you can run node "name of your file".js to view data. Once all is installed, view all changes and progress made in the "Open Terminal" when you right click on the JS file and run node.

### GitBash Terminal is once again needed to upload edits made in your local repository into GitHub-using the same commands of git add ./git commit -m/git push in order for the changes to be displayed and final push to be on heroku.
### Heroku was used to do a final deployment.


## Screenshot

Select Route Demos in Insomnia:

Get all users
<img width="1430" alt="Screen Shot 2022-09-07 at 7 28 24 PM" src="https://user-images.githubusercontent.com/28368622/189020176-defa4a30-ebdf-45e1-b81a-ef66875e7906.png">

Logging in with hashed password and unique JSON Web Token
<img width="1430" alt="Screen Shot 2022-09-07 at 7 28 48 PM" src="https://user-images.githubusercontent.com/28368622/189020223-cfa75bd4-c618-4cdc-b652-3588d20a0478.png">

Writing a Daily Diary.  
<img width="1430" alt="Screen Shot 2022-09-07 at 7 29 40 PM" src="https://user-images.githubusercontent.com/28368622/189020324-a39b8f30-6114-4f33-a29b-50c53ae7c561.png">


## Deployed Link

https://solit-backend.herokuapp.com/

## Credits
### Tutoring, WW3 Schools, TA's, Stack Overflow, Slack AskBot, and the following:
### https://cloudinary.com/
https://blog.logrocket.com/handling-images-with-cloudinary-in-react/



## Members 

### soLit Team Members: 

### Asiya Ahmed - https://github.com/AsiyahAA
### Annie Hosch - https://github.com/anniech1
### Kristina Glinoga - https://github.com/KGlinoga
### Lesli Patino - https://github.com/lpatino1


## License
## [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


