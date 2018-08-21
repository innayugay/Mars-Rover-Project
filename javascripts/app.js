// Rover Object Goes Here
// ======================
var marsRover ={
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var theCommands = 'rffrfflfrff';

function getCommands(rover, commands){

  console.log(`Command ${commands} is received.`)
  for (i=0; i< commands.length; i++){
    if (commands[i] === 'r'){
      turnRight(rover);
    }
    else if (commands[i] === 'f'){
      moveForward(rover);
      rover.travelLog.push(`(${rover.x}, ${rover.y})`)
    }
    else if (commands[i] === 'l'){
      turnLeft(rover);
    }
  }
  console.log('travelLog recordings: ' + rover.travelLog);
}


getCommands(marsRover, theCommands);



function turnLeft(rover){
  
  switch (rover.direction){
    case "N": 
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log('turnLeft was called! The rover now faces ' + rover.direction + '.');
  
  // return rover.direction;
}


function turnRight(rover){

  switch (rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S"
      break;
  }
  
  console.log('turnRight was called! The rover now faces ' + rover.direction + '.');
  
}



function moveForward(rover){

  if (rover.direction === "N"){
    rover.y += 1;
  
  }
  else if (rover.direction === "W"){
    rover.x -= 1;
  
  }
  else if (rover.direction === "S"){
    rover.y -= 1;
  
  }
  else if (rover.direction === "E"){
    rover.x += 1;
  
  }
  console.log(`moveForward was called! The rover's current position is (${rover.x} , ${rover.y})`);

}
