/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  // Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
 
  
  (function ($) {
    $.fn.countTo = function (options) {
      options = options || {};
      
      return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
          from:            $(this).data('from'),
          to:              $(this).data('to'),
          speed:           $(this).data('speed'),
          refreshInterval: $(this).data('refresh-interval'),
          decimals:        $(this).data('decimals')
        }, options);
        
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;
        
        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data('countTo') || {};
        
        $self.data('countTo', data);
        
        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        
        // initialize the element with the starting value
        render(value);
        
        function updateTimer() {
          value += increment;
          loopCount++;
          
          render(value);
          
          if (typeof(settings.onUpdate) == 'function') {
            settings.onUpdate.call(self, value);
          }
          
          if (loopCount >= loops) {
            // remove the interval
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
            
            if (typeof(settings.onComplete) == 'function') {
              settings.onComplete.call(self, value);
            }
          }
        }
        
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
    
    $.fn.countTo.defaults = {
      from: 0,               // the number the element should start at
      to: 0,                 // the number the element should end at
      speed: 1000,           // how long it should take to count between the target numbers
      refreshInterval: 100,  // how often the element should be updated
      decimals: 0,           // the number of decimal places to show
      formatter: formatter,  // handler for formatting the value before rendering
      onUpdate: null,        // callback method for every time the element is updated
      onComplete: null       // callback method for when the element finishes updating
    };
    
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  }(jQuery));
  
  jQuery(function ($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
    });
    
    // start all the timers
    $('.timer').each(count);  
    
    function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
    }
  });
  


  
  



var links = Array.prototype.slice.call(document.querySelectorAll('[data-link]')),
sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
var preloader = document.querySelector('.preloader');
var wrapper = document.querySelector('.wrapper');
var bt = document.querySelector('.bt-menu');
var boxMenu = document.querySelector('.box-menu');





var app = (function(){
  'use strict';
  return {
    init: function(){
      document.querySelector('[data-link="home"]').classList.add('active');
      document.querySelector('[data-section="home"]').classList.add('show-section');
      document.body.classList.add('scroll');
      loader();
      menu();
      toggleSections();
      lightModal();
    }
  };
})();



window.addEventListener('load',app.init,false);

/* Menu
----------------------------------------------------------------------*/
function menu(){
  bt.addEventListener('click',function(){
      if(bt.classList.contains('close')){
        bt.classList.remove('close');
        boxMenu.classList.remove('show');
        document.body.classList.add('scroll');
      }else{
        bt.classList.add('close');
        boxMenu.classList.add('show');
        document.body.classList.remove('scroll');
      }
  });
}


/* preloader
----------------------------------------------------------------------*/
function loader(){
  preloader.classList.add('hide');
  var t = setTimeout(function(){
    wrapper.classList.remove('hide');
    clearInterval(t);
  },500);
}

/*  Toggle sections 
----------------------------------------------------------------------*/
function toggleSections(){
  Array.prototype.forEach.call(links,function(o,i){
    o.addEventListener('click',function(e){
      var section = document.querySelector('[data-section="'+this.getAttribute('data-link')+'"]');
      e.preventDefault();
      removeLinks(function(){
        o.classList.add('active');
        section.classList.add('show-section');
        // hide menu
        bt.classList.remove('close');
        boxMenu.classList.remove('show');
        document.body.classList.add('scroll');
      });
    });
  });
}


/* Remove active and show-section classes 
----------------------------------------------------------------------*/
function removeLinks(_success){
  Array.prototype.forEach.call(links,function(o,i){
    o.classList.remove('active');});
  Array.prototype.forEach.call(sections,function(o,i){
   o.classList.remove('show-section');
  });
  if(_success()) return _success();
}

/* Custom LightModal
----------------------------------------------------------------------*/
function lightModal(){
  var links = document.querySelectorAll('.lightCustom'), 
  arrayOfLinks = Array.prototype.slice.call(links);
  Array.prototype.forEach.call(arrayOfLinks, function (obj, index) {
    obj.addEventListener('click', function (e) {
        e.preventDefault();
        var title = obj.querySelector('.box_title span') ? obj.querySelector('.box_title span').innerHTML : '...';
        var desc = obj.querySelector('.box_description') ? obj.querySelector('.box_description').innerHTML : desc = '';
        document.querySelector('.lightModal').classList.add('show');
        document.querySelector('.lightModal-title').innerHTML = title;
        document.querySelector('.lightModal-desc').innerHTML = desc;
        document.querySelector('.lightModal-image').src = obj.href;
        document.querySelector('.lightModal-image').alt = title;
        document.body.classList.remove('scroll');
    });
    
    document.querySelector('.lightModal-close').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.lightModal').classList.remove('show');
        document.body.classList.add('scroll');
    });
  });
}



function sendEmail() { 
  Email.send({ 
    Host: "kharoufwala24@gmail.com", 
    Username: "wala", 
    Password: "azertywala2020", 
    To: 'walakharouf665@gmail.com', 
    From: "kharoufwala24@gmail.com", 
    Subject: "Sending Email using javascript", 
    Body: "Well that was easy!!", 
  }) 
    .then(function (message) { 
      alert("mail sent successfully") 
    }); 
} 
