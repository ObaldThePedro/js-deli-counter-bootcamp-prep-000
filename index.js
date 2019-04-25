var katzDeliLine = [];

function takeANumber(Array,name){
  var index = 0;
  Array.push(name);
  index = Array.length;
  
  return "Welcome, " + name + ". You are number " + index + " in line.";
}

function nowServing(Array)
{
  if(Array.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + Array.shift(0);
  }
}

function currentLine(Array)
{
  list = [];
  if(Array.length === 0)
  {
    return "The line is currently empty!";
  }
  else{
    for(var i=0;i < Array.length ; i++)
    {
      list.push(' ' + (i + 1) + '. ' + Array[i] + ' ');
    } 
  }
  return "The line is currently: " + list;
}

console.log(takeANumber(katzDeliLine, "Pedro"));
console.log(takeANumber(katzDeliLine, "Helen"));


console.log(currentLine(katzDeliLine));
console.log(nowServing(katzDeliLine));
