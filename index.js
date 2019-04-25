var katzDeliLine = [];

function takeAnumber(Array,name)
{
  var index = 0;
  Array.push(name);
  index = Array.length;
  
  return "Welcome, " + name + ". You are number " + index + " in line."
}

function nowServing(Array)
{
  if(Array.length === 0)
  {
    return "There is nobody to be served!";
  }
  else{
    
  }
}

console.log(takeAnumber(katzDeliLine,"Helen"));
console.log(takeAnumber(katzDeliLine,"Pedro"));