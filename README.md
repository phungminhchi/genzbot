
[![Version][version-shield]](version-url)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<center><img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=lavamusic&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient" /></center>
<br>
<h2 align="center">Our Music Bot</h2>
<h4 align="center">High Quality Music Bot With Dj System, Music Channel, 24/7 In VC, Stage Channels, Slash Commands and more for FREE!</h4>
<p align="center">

<br />
<br />
<br />
<br />
<br />
<br />


## 📝 Tutorial

A Tutorial has been uploaded on YouTube, Watch it by clicking [here](https://youtu.be/x5lQD2rguz0)


## 🎭 Features
- [x] Setup System 
- [x] Music
- [x] 24/7
- [x] Dj 
- [x] Custom Playlist (global)
- [x] SlashCommand
- [x] Custom prefix
- [x] Filters
- [x] Easy to use
- [x] More


## 🖼️ Screenshots
<br />
<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/876035356460462090/912404827118641202/Screenshot_20211122-234019__01.jpg">
    <img src="https://media.discordapp.net/attachments/876035356460462090/910856250084970518/Screenshot_20211118-170634__01.jpg">
    <img src="https://media.discordapp.net/attachments/876035356460462090/910855739969527849/Screenshot_20211118-170456__01.jpg">
    <img src="https://media.discordapp.net/attachments/876035356460462090/911442921738350622/Screenshot_20211120-075640__01.jpg">

  </a>
</p>

## 📎 Requirements
* [Nodejs](https://nodejs.org/en/)-v16 
* [Discord.js](https://github.com/discordjs/discord.js/)-v13
* [Java](https://adoptopenjdk.net/) for lavalink
* [Lavalink](https://ci.fredboat.com/viewLog.html?buildId=lastSuccessful&buildTypeId=Lavalink_Build&tab=artifacts&guest=1)

Note: Java v11 or newer is required to run the Lavalink.jar. Java v13 is recommended. If you are using sdkman then its a manager, not Java, you have to install sdkman and use sdkman to install Java

Warning: Java v14 has issues with Lavalink.

### 🌐 Main

- Discord bot's
  token `You should know why you need this or you won't go to this repo` [Get or create bot here](https://discord.com/developers/applications)
- Mongodb
  URI `for custom prefix` [MongoDB](https://account.mongodb.com/account/login)
- Your ID `for eval command. It's dangerous if eval accessible to everyone`
- Spotify client ID `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)
- Spotify client Secret `for spotify support` [Click here to get](https://developer.spotify.com/dashboard/login)

## 🎶 Available music sources:

- youtube`*`
- bandcamp`*`
- soundcloud`*`
- twitch`*`
- vimeo`*`
- http (you can use radio for it)`*`
- spotify`*`
- deezer`*`


<!-- INSTALL -->
## 🚀 Installation from source
```
git clone https://github.com/brblacky/lavamusic.git
```
After cloning, run an
```
npm install
```
* Start the bot with `node src/index.js`

to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing *much* easier.

## 🚀 Installation using docker-compose
Alternatively you can run lavamusic on [docker](https://www.docker.com/). Pull the prebuilt docker image from [here](https://ghcr.io/brblacky/lavamusic).  
See [here](https://github.com/StefanLobbenmeier/lavamusic-docker-compose) for a complete environment.

## intents

<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894114853382410260/unknown.png">

  </a>
</p>
When Your Running The Code You Must Have Gotten This Error To Fix This Head Over To Your Bots Discord Application and Go To The Bot Settings And Find This

<p align="center">
  <a href="https://github.com/brblacky/lavamusic">
    <img src="https://media.discordapp.net/attachments/848492641585725450/894115221701001216/unknown.png">

  </a>
</p>
Then Turn On Both Of Those Settings And Click "Save Changes" Then Your Are Done And The It Should Be Fixed
<!-- CONFIGURATION -->

## ⚙️ Configurations
- edit in `src/config.js` and you can do in `.env` 
```js
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "491577179495333903", //your discord id
    mongourl: process.env.MONGO_URI || "", // MongoDb URL
    embedColor: process.env.COlOR || "#303236", // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
```
## 🌋 lavalink 
```js
      "host": "disbotlistlavalink.ml",
      "port": 80,
      "password": "LAVA",
      "retryDelay": 3000,
      "secure": false
```
- Create an application.yml file in your working directory and copy the [example](https://github.com/freyacodes/Lavalink/blob/master/LavalinkServer/application.yml.example) into the created file and edit it with your configuration.
- Run the jar file by running `java -jar Lavalink.jar` in a Terminal window.
