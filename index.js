function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return ('This one is on me!')
  }
  if (distance > 2000 && distance <= 2500) {
    return ('I will gladly take your thirty bucks.');
  }
  if (distance > 2500) {
    return ('No can do.');
  }
}

function ternaryCheckCity(city) {
  return city === "NYC"? "Ok, sounds good." : "No go.";
 }


function switchOnCharmFromTip(tip){
  switch (tip) {

  case "generous":
    return "Thank you so much."
  case "not as generous":
    return 'Thank you.'
  default:
    return "Bye."
  }

}






// Switch

// const order = 'cheeseburger';

// let ingredients;

// switch (order) {
//     case 'cheeseburger':
//         ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
//         break;
//     case 'hamburger':
//         ingredients = 'bun, burger, lettuce, tomato, onion';
//         break;
//     case 'malted':
//         ingredients = 'milk, ice cream, malted milk powder';
//         break;
//     default:
//         console.log("Sorry, that's not on the menu right now.");
//         break;
// } 


// const age = 15;

// let isTeenager;

// switch (age) {
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//     case 19:
//         isTeenager = true;
//         break;
//     default:
//         isTeenager = false;
// } 


// //   describe('switchOnCharmFromTip()', function () {
// //     it('should return "Thank you so much." if the tip is generous', function () {
// //       expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
// //     });

// //     it('should return "Thank you." if the tip is not as generous', function () {
// //       expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
// //     });

// //     it('should return "Bye." if anything else', function () {
// //       expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
// //     });
// //   });
// // });
