## React Application skeleton

This is a re-usable React, Reflux, Bootstrap and SASS skeleton. To use it, you need these two commands :

```git clone https://github.com/helvanic/react-reflux-bootstrap-sass-skeleton.git```

then ```npm install```

You also need to have gulp and the require dependencies installed. If it's not already the case, use this command:

```npm install gulp gulp-sass gulp-plumber --save-dev```

In order to work on this skeleton, use these commands:

```npm run start``` : will watch .jsx files changes and build the main.js file (which will contain the application)

```npm run server``` : will launch an express server that you can use to test your files (it's yours to configure though). Note that if you juste want a server to test your application without any data interaction, go to the /public folder and use ```http-server```.

```npm run watch``` : will watch .scss files changes and build the screen.css file (which contains your personal styling). Note that you don't have to use this if you don't want to, since Bootstrap is also present in this project. If you won't use it, just delete the sass folder.

PS : You might want to add your src folder to your .gitignore file. I know some people prefer it this way.
