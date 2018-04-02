function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  //adding name to the end of the katzDeliLine array
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}
function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    //if nobody is in line katzDeliLine.length will equal to 0
  return "There is nobody waiting to be served!";  
  } else {
    //return first person in line then remove that individual from line
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  } else {

  const numbersAndNames = []

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
}
}
  //returns the current line
  //ex katzDeliLine ["Ada", "Grace"]
  //would return "The line is currently: 1. Ada, 2. Grace"
  //if nobody in line
  //return "The line is currently empty."