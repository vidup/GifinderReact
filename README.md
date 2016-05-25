## React version of Gifinder App

This app uses the Giphy API in order to find gifs according to the user input. It displays a grid of gifs, with overlays
allowing the user to get the Gif's direct link, the original Giphy link AND the origin of the GIF (Giphy indexes Gifs used on reddit,
for example).
You can try it there : http://gifinderreact.herokuapp.com/ (Takes a few seconds to start the first time, cause it's on a free Heroku account ^^).

```git clone https://github.com/helvanic/GifinderReact.git```

then ```npm install```

You also need to install the devDependencies, by the way. They're already listed in the package.json file.

In order to work on this application, use these commands:

```npm run build``` : will watch .jsx files changes and build the main.js file (which will contain the application JavaScript code)

```npm run server``` : will launch an express server that you can use to add features to the application (it's yours to configure though). Note that if you juste want a server to test your application without any data interaction, go to the /public folder and use ```http-server```.

```npm run watch``` : will watch .scss files changes and build the screen.css file (which contains your personal styling). Note that you don't have to use this if you don't want to, since Bootstrap is also present in this project. If you won't use it, just delete the sass folder.

```npm run start``` : You don't need to use this. I just put it there for Heroku.

PS : You might want to add your src folder to your .gitignore file. I know some people prefer it this way.
