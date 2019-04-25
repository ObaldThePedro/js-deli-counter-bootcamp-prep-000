var katzDeliLine = [];

function takeAnumber(Array,name)
{
  var index = 0;
  Array.push(name);
  index = Array.length;
  
  return "Welcome, " + name + ". You are number " + index + " in line."
}

console.log(takeAnumber(katzDeliLine,"Helen"));
console.log(takeAnumber(katzDeliLine,"Pedro"));