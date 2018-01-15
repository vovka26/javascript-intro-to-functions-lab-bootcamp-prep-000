function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(`${string.toUpperCase()}`);
}

function logWhisper(string){
  console.log(`${string.toLowerCase()}`)
}

var lowerCaseReply = "I can't hear you"
var upperCaseReply = "YES INDEED!"
var loveReply = "I love you, too."

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return lowerCaseReply
  }
}