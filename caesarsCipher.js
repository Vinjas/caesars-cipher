function rot13(str) {

  return str
  .split("")
  
  .map(function(elem) {
    elem = elem.charCodeAt(0) 
    if(elem >= 65 && elem <= 77){
      elem += 13
    } else if (elem >= 78 && elem <= 90) {
      elem -= 13
    }
    return String.fromCharCode(elem)
  })
  
  .join("")

}
