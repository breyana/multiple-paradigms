var mdString = `.**Bold**
*Italics*

**bold**
 .`
var splitString = mdString.split('')
var stringArray = []



for (var i = 0; i < splitString.length; i++) {
  if (splitString[i] === '*' && splitString[i+1] === '*') {
    for (var j = i + 3; j < splitString.length; j++) {
      if (splitString[j] === '*' && splitString[j+1] === '*') {
        splitString[i] = '<b>'
        splitString[j] = '</b>'
        splitString.splice(i, 1) //Why is this deleting the first few indexes??
        splitString.splice(j, 1)
      }
    }
  } else if (splitString[i] === '*') {
    for (var j = i + 1; j < splitString.length; j++) {
      if (splitString[j] === '*') {
        splitString[i] = '<i>'
        splitString[j] = '</i>'
      }
    }
  }
}

console.log(splitString.join(''))
var endString = splitString.join('')
console.log(endString)
