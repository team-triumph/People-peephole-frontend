## Welcome to My Repo

This repo is representative of the first cross-class collaboration between the Front-end, Rails and IOS cohorts at the Iron Yard Atlanta, Summer 2015.

When completed, the game will allow users to post images via an iPhone or through the web app and users can thatn guess at what the picture is from a multiple choice selection. A correct answer gives the user a point and locks that user out from submitting another answer on that post.

** Current known bugs that need fixes:
- Answer input returns boolean `true` for all submissions. Guessing function currently disabaled.
- Scoreboard needs to be added.
- Delete post functionality is currently broken.
- Style needs to updated to reflect a flow across all platforms.

## Dependencies:

This project contains many additional dependencies, therefore to properly install you must:

-`npm install`: To compile all Node package requirements.
-`bower install`: To compile all Bower components.

In addition, we would like to thank the hard working folks at Font-Awesome and Materialize for giving us cool tools to help make our project shimmer!

## Usage

This template contains some simple `gulp` tasks. They are as follows:


- `gulp watch`: This will launch a Node Server and start the standard `watchlist` task
- `gulp bower`: This will move the bower components into their proper location. This will run during the `watch` task, but you may need to run it manually once in a while
- `gulp handlebars`: This will compile your handlebars (`.hbs`) files for you. Again, `watch` will watch for changes, but if you add new files, you'll need to run this or restart the `gulp watch` command.

There are many more tasks, and you really should read through the `gulpfile.js`, but the ones above will take care of you in most cases.
