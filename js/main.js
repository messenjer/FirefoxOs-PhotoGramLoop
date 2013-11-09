// Generated by CoffeeScript 1.6.3
var App,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

App = (function() {
  App.capturedImage;

  App.layerImage;

  App.canvas;

  App.imageWidth = 320;

  App.imageHeight = 240;

  function App() {
    this.onLoad = __bind(this.onLoad, this);
  }

  App.prototype.init = function() {
    this.bind();
    return this.screenList();
  };

  App.prototype.bind = function() {
    var _this = this;
    $('body').on('click', '#home', function() {
      return _this.screenList();
    });
    $('body').on('click', '#addPic', function() {
      return _this.screenPicture();
    });
    return $('body').on('click', '#help', function() {
      return _this.screenHelp();
    });
  };

  App.prototype.screenList = function() {
    return this.displayScreen('#screen-list');
  };

  App.prototype.screenPicture = function() {
    this.displayScreen('#screen-picture');
    return this.gramify();
  };

  App.prototype.screenHelp = function() {
    return this.displayScreen('#screen-help');
  };

  App.prototype.displayScreen = function(selector) {
    $('.screen').hide();
    return $(selector).show();
  };

  App.prototype.gramify = function(onSuccess) {
    console.log('gramify');
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.capturedImage = this.loadImage('images/demo.jpg', this.onLoad);
    this.layerImage = this.loadImage('images/layer-1.png', this.onLoad);
    return this.imagesLoaded = 0;
  };

  App.prototype.onLoad = function() {
    this.imagesLoaded += 1;
    if (this.imagesLoaded === 2) {
      this.ctx.drawImage(this.capturedImage, 0, 0, 320, 240);
      this.ctx.globalAlpha = 0.5;
      return this.ctx.drawImage(this.layerImage, 0, 0);
    }
  };

  App.prototype.loadImage = function(src, onload) {
    var img;
    img = new Image();
    img.onload = onload;
    img.src = src;
    return img;
  };

  return App;

})();

$(function() {
  var app;
  app = new App();
  return app.init();
});
