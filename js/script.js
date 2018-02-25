const $start = $('.start');

const $cntrImg = $('<img class="ctnr-img">');

let onCone;
let onCup;

const $flavorImg = $('<img class="scoop-img">');

const $sauceImg = $('<img class="sauce-img">');

const $toppingImg = $('<img class="topping-img">');


$('button').on('mouseover', function() {
    $(this).addClass('hovered');
});

$('button').on('mouseout', function() {
    $(this).removeClass('hovered');
});

$start.on('click', function() {
    $(this).hide();
    $('.intro').slideUp(1000);
    $('.preview').show();
    $('.ctnr').show();
});

// Next button event handler
$('.next').on('click', function() {
    if($('.ctnr').css('display') !== 'none') {
        $('.ctnr').hide();
        $('.flavor').show();
        $('.next').hide();
    } else if($('.flavor').css('display') !== 'none') {
        $('.flavor').hide();
        $('.sauce').show();
        $('.next').hide();
    } else if($('.sauce').css('display') !== 'none') {
        $('.sauce').hide();
        $('.topping').show();
        $('.next').hide();
    }
  
});

// Container buttons event handlers
$('.ctnr').on('click', function() {
    
    if($(this).hasClass('cone')) {
        $cntrImg.attr('src', 'img/cone.png');
        onCone = true;
        onCup = false;
    } else if($(this).hasClass('cup')) {
        $cntrImg.attr('src', 'img/cup.png');
        onCup = true;
        onCone = false;
    }
    
    $('.preview').append($cntrImg);
    $('.next').fadeIn(1000);
});



// Flavors buttons event handler
$('.flavor').on('click', function() {

    if(onCone) {
        $flavorImg.addClass('on-cone');
    } else if(onCup) {
        $flavorImg.addClass('on-cup');
    }
    
    if($(this).hasClass('vanilla')) {
        $flavorImg.attr('src','img/scoop-vanilla.png');
    } else if($(this).hasClass('chocolate')) {
        $flavorImg.attr('src','img/scoop-chocolate.png');
    } else if($(this).hasClass('strawberry')) {
        $flavorImg.attr('src','img/scoop-strawberry.png'); 
    }
    
    $('.preview').append($flavorImg);
    $('.next').fadeIn(1000);
});

// Sauce buttons event handler
$('.sauce').on('click', function() {

    if(onCone) {
        $sauceImg.addClass('sauce-cone');
    } else if(onCup) {
        $sauceImg.addClass('sauce-cup');
    }
    
    if($(this).hasClass('choco-sauce')) {
        $sauceImg.attr('src','img/chocolate-sauce.png');
    } else if($(this).hasClass('caramel-sauce')) {
        $sauceImg.attr('src','img/caramel-sauce.png');
    } else if($(this).hasClass('none')){
        $sauceImg.attr('src','');  
    }
    
    $('.preview').append($sauceImg);
    $('.next').fadeIn(1000);
});



// Toppings buttons event handler
$('.topping').on('click', function() {
    if(onCone) {
        $toppingImg.addClass("topping-cone");
    } else if (onCup) {
        $toppingImg.addClass("topping-cup");
    }
    
    if($(this).hasClass('sprinkles')) {
        $toppingImg.attr('src','img/sprinkles.png');
    } else if($(this).hasClass('none')){
        $toppingImg.attr('src','');      
    }
    
    $('.preview').append($toppingImg);
    $('.complete').fadeIn(1000);
});


// Complete button event handler
$('.complete').on('click', function() {
    $('.topping').hide();
    $('.complete').hide();
    $('.complete-msg').fadeIn(1000);
});


