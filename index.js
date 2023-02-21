

function scuberGreetingForFeet(distance){
  let reply
  if (distance <=400) {
    reply = `This one is on me!`
  }
  if (distance > 400 && distance <= 2000) {
    reply = `That will be twenty bucks.`
  }
  if (distance > 2000 && distance <= 2500) {
    reply = `I will gladly take your thirty bucks.`
  }
  if (distance > 2500) {
    reply = `No can do.`
  }
  return reply
}


function ternaryCheckCity(city){
  return city === `NYC` ? `Ok, sounds good.` : `No go.`
}


function switchOnCharmFromTip(tip){
  switch(tip) {
    case `generous`:
      return 'Thank you so much.'
    case `not as generous`:
      return `Thank you.`
    default: return `Bye.`
  }
}



