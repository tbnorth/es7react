# es7react

Notes on getting the following technologies to work:

 - [ ] npm - the javascript package manager
 - [ ] ES7 - ECMAScript 7
 - [ ] babel - the javascript transpiler
 - [ ] React.js - the event framework
 - [ ] Material - the widget layer
 - [ ] webpack - the javascript bundler

System: Ubuntu 16.04

```shell

sudo apt install npm

sudo npm install babel-core babel-loader --save-dev

# These next lines directly from [Knel2015] (apart from the `sudo`)
# For ES6/ES2015 support
sudo npm install babel-preset-es2015 --save-dev
# If you want to use JSX
sudo npm install babel-preset-react --save-dev
# If you want to use experimental ES7 features
sudo npm install babel-preset-stage-0 --save-dev

# also from [Knel2015] - not sure what to do if you're ok with
# ECMAScript 6, and don't care about 5.  Currently (20170929)
# all usable browsers support 99% of ES6.
sudo npm install babel-polyfill --save
sudo npm install babel-runtime --save
sudo npm install babel-plugin-transform-runtime --save-dev

# not needed?
# sudo apt install nodejs-legacy

# from [Knel2015b]
sudo npm install webpack-dev-server -g
sudo npm install webpack-dev-server webpack babel-core babel-loader babel-preset-es2015 babel-polyfill

# from stackoverflow etc.
sudo npm install react react-dom
```

To
 make [`webpack.config.js`](webpack.config.js) you need to combine [Knel2015] and [Knel2015b].

## References

 - [Knel2015] [Using ES6 and ES7 in the Browser, with Babel 6 and Webpack](http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/)
 - [Knel2015b] [Webpack Made Simple: Building ES6 & LESS with autorefresh](http://jamesknelson.com/webpack-made-simple-build-es6-less-with-autorefresh-in-26-lines/)

