console.log('OK');
// https://cdn.plyr.io/3.3.12/plyr.js //

const player = new Plyr( '#player' , {
  
  controls : ['play', 'progress', 'fullscreen', 'current-time', 'volume', 'settings'],
  muted : false,  
});

const greetings = ['"Kindness is free"', '"Have courage and be kind"', '"Punctuality is the politeness of princes."', '"I speak French, not Italian!"', '"This is, perhaps, the greatest risk we will take - to be seen for who we really are."'];
console.log( greetings[4] );

let max = 5;
let randNum = Math.floor( Math.random() * max);
console.log( randNum );

$('h4').text( greetings[randNum ] );

let date = new Date();
let currentYear = date.getFullYear();

console.log( currentYear );
console.log( date );

$('footer p span').text( currentYear );


// Customize your own from plyr's github files //