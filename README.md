# AitF-Website
This is the website for NSF Algorithm in the Field project Award: 1637598.

## Setup
To compile the source code, [NodeJs](https://nodejs.org/en/) and [ember-cli](https://www.emberjs.com/) are needed. On Mac, this can be done by:
```
$ brew install node
$ sudo npm install npm -g
$ sudo npm install ember-cli -g

```
After running the above commands, to verify successful installation, one can do
```
$ node -v
$ npm -v
$ ember -v
```
All commands should return the installed version correctly. For more information on node installation, one can check a [tutorial](http://blog.teamtreehouse.com/install-node-js-npm-mac)

## Initialize Project
In order to serve and compile the source code, all dependencies should be installed. This can be done by running the following command in the project folder:
```
$ npm install
```

## How to Change Page Content
Most html related stuff are in `/app/templates/*.hbs`. For instance to change recent results page one can simply open `/app/templates/results.hbs` and edit the content as in normal html. Markers enclosed with `{{}}` are called Html [handlebars](http://handlebarsjs.com/) and in most cases won't need to be updated.

## How to Add a New Publication
The source data is stored in `/app/services/store.js` where we have a publication variable. Simply add a new entry following the existing format.

## How to Compile
After all changes is done, run the following to compile the project:
```
$ ember build
```
After this, all compiled files will be created in the folder `/dist`
