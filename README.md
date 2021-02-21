# Getting Started with Popify

1.  Clone the repo onto your local machine using command line "git clone https://github.com/chris-wray-dev/popify-fe.git"
2.  CD into the popify-fe directory and run command "npm install"
3.  Run the command "npm start" to get your local copy working.  The app will be available in your prowser at http://localhost:3000/
4.  You will need to spin up the Popify server which you can find over at https://github.com/chris-wray-dev/popify-server

## Synopsis

This web app provides an intuitive and simple search facility which is tied into the Spotify API.  Any searches entered will return media which is available to consume over at Spotify.  Each search result is it's own link to the Spotify website where you can play your favouroite tracks.

### Known issues

There is a slight bug which we're working which means when you select the types (album, artist etc. ) the app may not recognise your choices.  For now a quick refresh will sort the issue but we're working on it...

The only other issue is that the Spotify DB will return empty results lists for 'shows' and 'episodes' if they are included in the search criteria, I'm sure their boffins are working on it...
