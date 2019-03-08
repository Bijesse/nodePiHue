const raspi = require('raspi-io');
const five = require('johnny-five');
const express = require('express');
const request = require('request');

const board = new five.Board({
  io: new raspi()
});

board.on('ready', () => {
  
  const ledAllOff = new five.Led('P1-12'); // Blue Light
  const ledSun = new five.Led('P1-16'); // Red Light
  const ledStar = new five.Led('P1-24'); // Green Light
  const ledSpring = new five.Led('P1-22'); // Yellow Light

  const buttonAllOff = new five.Button('P1-29'); // Blue Button
  const buttonSun = new five.Button('P1-31'); // Red Button
  const buttonStar = new five.Button('P1-33'); // Green Button
  const buttonSpring = new five.Button('P1-35'); // Yellow Button
  
// Local API Address
  const hueURL = "http://192.168.0.3/api/7vO9zk1JtTHcbS58c7ZhHECpsxH62coI7gnZwT4J";

// Lights 5 6 7 8 to off: Blue Button
  buttonAllOff.on("press", () =>  lightOff(5));
  buttonAllOff.on("press", () =>  lightOff(6));
  buttonAllOff.on("press", () =>  lightOff(7));
  buttonAllOff.on("press", () =>  lightOff(8));
  buttonAllOff.on("press", () =>  ledAllOff.on());
  buttonAllOff.on("release", () =>  ledAllOff.off());

 // Lights 5 6 7 8 to Sun: Red Button
  buttonSun.on("press", () =>  lightOn(5));
  buttonSun.on("press", () =>  lightOn(6));
  buttonSun.on("press", () =>  lightOn(8));
  buttonSun.on("press", () =>  lightBright(5));
  buttonSun.on("press", () =>  lightBright(6));
  buttonSun.on("press", () =>  lightBright(8));
  buttonSun.on("press", () =>  lightOn(7));
  buttonSun.on("press", () =>  lightBright(7));
  buttonSun.on("press", () =>  ledSun.on());

  buttonSun.on("release", () => lightFiveSunHue());
  buttonSun.on("release", () => lightSixSunHue());
  buttonSun.on("release", () => lightEightSunHue());
  buttonSun.on("release", () => lightFiveSunSat());
  buttonSun.on("release", () => lightSixSunSat());
  buttonSun.on("release", () => lightEightSunSat());
  buttonSun.on("release", () => lightSevenSunHue());
  buttonSun.on("release", () => lightSevenSunSat());
  buttonSun.on("release", () => ledSun.off());

  // Lights 5 6 7 8 to Starlight: Green Button
  buttonStar.on("press", () =>  lightOn(5));
  buttonStar.on("press", () =>  lightOn(6));
  buttonStar.on("press", () =>  lightOn(8));
  buttonStar.on("press", () =>  lightFiveStarBright());
  buttonStar.on("press", () =>  lightSixStarBright()); 
  buttonStar.on("press", () =>  lightEightStarBright());
  buttonStar.on("press", () =>  lightOn(7));
  buttonStar.on("press", () =>  lightSevenStarBright());
  buttonStar.on("press", () =>  ledStar.on());

  buttonStar.on("release", () => lightFiveStarHue());
  buttonStar.on("release", () => lightSixStarHue()); 
  buttonStar.on("release", () => lightEightStarHue());
  buttonStar.on("release", () => lightFiveStarSat());
  buttonStar.on("release", () => lightSixStarSat());
  buttonStar.on("release", () => lightEightStarSat());
  buttonStar.on("release", () => lightSevenStarHue());
  buttonStar.on("release", () => lightSevenStarSat());
  buttonStar.on("release", () => ledStar.off());

  // Lights 5 6 7 8 to Spring Blossom: Yellow Button
  buttonSpring.on("press", () =>  lightOn(5));
  buttonSpring.on("press", () =>  lightOn(6));
  buttonSpring.on("press", () =>  lightOn(8));
  buttonSpring.on("press", () =>  lightFiveSpringBright());
  buttonSpring.on("press", () =>  lightSixSpringBright());
  buttonSpring.on("press", () =>  lightEightSpringBright());
  buttonSpring.on("press", () =>  lightOn(7));
  buttonSpring.on("press", () =>  lightSevenSpringBright());
  buttonSpring.on("press", () =>  ledSpring.on());

  buttonSpring.on("release", () => lightFiveSpringHue());
  buttonSpring.on("release", () => lightSixSpringHue());
  buttonSpring.on("release", () => lightEightSpringHue());
  buttonSpring.on("release", () => lightFiveSpringSat());
  buttonSpring.on("release", () => lightSixSpringSat());
  buttonSpring.on("release", () => lightEightSpringSat());
  buttonSpring.on("release", () => lightSevenSpringHue());
  buttonSpring.on("release", () => lightSevenSpringSat());
  buttonSpring.on("release", () => ledSpring.off());


  //changes a light state to on
  function lightOn(x){
  request({
      uri: hueURL + "/lights/" + x + "/state/",
      method: 'PUT',
      json: {"on": true}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  //turns light off based on parameter
  function lightOff(x){
  request({
      uri: hueURL + "/lights/" + x + "/state/",
      method: 'PUT',
      json: {"on": false}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightFiveSunHue(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  
  
  function lightSixSunHue(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightSevenSunHue(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightEightSunHue(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 14136}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightFiveSunSat(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSunSat(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSunSat(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightSunSat(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"sat": 179}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

//Star light functions

  function lightFiveStarBright(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"bri": 23}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixStarBright(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"bri": 59}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenStarBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 23}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightStarBright(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"bri": 90}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightFiveStarHue(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 38459}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixStarHue(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 44047}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  

  function lightSevenStarHue(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"hue": 55266}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }  

  function lightEightStarHue(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 48758}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightFiveStarSat(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"sat": 209}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixStarSat(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"sat": 195}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenStarSat(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"sat": 101}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightStarSat(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"sat": 175}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

//Spring Blossom light functions

  function lightFiveSpringBright(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSpringBright(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSpringBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSpringBright(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightSpringBright(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"bri": 229}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightFiveSpringHue(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"hue": 56029}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSpringHue(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"hue": 44681}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightSevenSpringHue(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"hue": 56029}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightEightSpringHue(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"hue": 44077}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  } 

  function lightFiveSpringSat(){
  request({
      uri: hueURL + "/lights/5/state/",
      method: 'PUT',
      json: {"sat": 103}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSixSpringSat(){
  request({
      uri: hueURL + "/lights/6/state/",
      method: 'PUT',
      json: {"sat": 55}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightSevenSpringSat(){
  request({
      uri: hueURL + "/lights/7/state/",
      method: 'PUT',
      json: {"sat": 103}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

  function lightEightSpringSat(){
  request({
      uri: hueURL + "/lights/8/state/",
      method: 'PUT',
      json: {"sat": 175}
  },
  function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
  }
  );
  }

});