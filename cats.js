$(document).ready(function(){
  $('button').on('click', function(){
  var cats = ['<h1>Edward</h1>' + '<img src= "http://static.boredpanda.com/blog/wp-content/uploads/2014/11/most-popular-cats-lil-bub-11__605.jpg">',
  '<h1>Wallace</h1>' + '<img src= "https://s-media-cache-ak0.pinimg.com/originals/6b/04/f2/6b04f2de3e4a1d11047bd8f6d0025dfd.jpg">',
  '<h1>Chloe</h1>' + '<img src= "https://turnstylenews.com/wp-content/uploads/2011/08/5.jpg">'];
  $('img').remove();
  $('h1').remove();
        $('button').after($(cats[Math.floor(Math.random() * cats.length)]));
  });
});
