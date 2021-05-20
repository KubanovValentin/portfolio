$(document).ready(function() {
    $(".button.rus_lang").click(function () {
        //alert("Нажата кнопка АНГЛИЙСКИЙ");
        var rusLang = document.getElementsByClassName("rus_lang");
        var enLang = document.getElementsByClassName("en_lang");
        for (i = 0; i < enLang.length; i++) {
          enLang[i].style.position = "static";
          rusLang[i].style.position = "absolute";
          rusLang[i].style.top = "-9999px";
          rusLang[i].style.left = "-9999px";
        }
      });
      
      $(".button.en_lang").click(function () {
        //alert("Нажата кнопка АНГЛИЙСКИЙ");
        var rusLang = document.getElementsByClassName("rus_lang");
        var enLang = document.getElementsByClassName("en_lang");
        for (i = 0; i < enLang.length; i++) {
          rusLang[i].style.position = "static";
          enLang[i].style.position = "absolute";
          enLang[i].style.top = "-9999px";
          enLang[i].style.left = "-9999px";
        }
      });
    });

// set and cache variables
var w, container, carousel, item, radius, itemLength, rY, ticker, fps; 
var mouseX = 0;
var mouseY = 0;
var mouseZ = 0;
var addX = 0;


// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
// no need to create my own :)



$(document).ready( init )

function init()
{
  w = $(window);
  container = $( '#contentContainer' );
  carousel = $( '#carouselContainer' );
  item = $( '.carouselItem' );
  itemLength = $( '.carouselItem' ).length;
  fps = $('#fps');
  rY = 360 / itemLength;
  radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
  
  // set container 3d props
  TweenMax.set(container, {perspective:4000})
  TweenMax.set(carousel, {z:-(radius)})
  
  // create carousel item props
  
  for ( var i = 0; i < itemLength; i++ )
  {
    var $item = item.eq(i);
    var $block = $item.find('.carouselItemInner');
    
    //thanks @chrisgannon!        
    TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
    
    animateIn( $item, $block )						
  }
  
  // set mouse x and y props and looper ticker
  window.addEventListener( "mousemove", onMouseMove, false );
  ticker = setInterval( looper, 3000/90 );			
}

function animateIn( $item, $block )
{
  var $nrX = 360 * getRandomInt(2);
  var $nrY = 360 * getRandomInt(2);
    
  var $nx = -(2000) + getRandomInt( 4000 )
  var $ny = -(2000) + getRandomInt( 4000 )
  var $nz = -4000 +  getRandomInt( 4000 )
    
  var $s = 1.5 + (getRandomInt( 10 ) * .1)
  var $d = 1 - (getRandomInt( 8 ) * .1)
  
  TweenMax.set( $item, { autoAlpha:1, delay:$d } )	
  TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
  TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
  TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
}

function onMouseMove(event)
{
  mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0029;
  mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .0;
  mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
}

// loops and sets the carousel 3d properties
function looper()
{
  addX += mouseX
  TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
  TweenMax.set( carousel, {z:mouseZ } )

}

function getRandomInt( $n )
{
  return Math.floor((Math.random()*$n)+1);	
}

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__item'),
      hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      })
  })
});
$("a[href=#upp]").click(function() {
  const _href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
  return false;
});

