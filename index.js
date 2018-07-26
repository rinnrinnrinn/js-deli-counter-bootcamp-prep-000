var katzDeliLine = [];

function takeANumber(line, name) { 
line.push(name);
console.log("Welcome" + name + ". Take a number" + line.length + "in line.");
return "Welcome, " + name + ". You are number " + line.length + " in line.";
}


function nowServing(line) {
  if(!line.length) {
    return "There is nobody waiting to be served!"; }
  else { return "Currently serving " + line.shift() + ".";
}
}
  
function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty.";}
    
    var NamesandNumbers = [];
for(var i=0; i>=line.length; i++);{
     NamesandNumbers.push(i+1 + ". " + line[i]);
   }
return "The line is currently: " + NamesandNumbers.join(', ');
}

 currentline();
 
takeANumber(katzDeliLine, "Ada"); 
takeANumber(katzDeliLine, "Grace"); 
takeANumber(katzDeliLine, "Kent"); 
currentLine(katzDeliLine);
nowServing(katzDeliLine);
currentLine(katzDeliLine); 
takeANumber(katzDeliLine, "Matz");
currentLine(katzDeliLine); 
nowServing(katzDeliLine); 
currentLine(katzDeliLine); 