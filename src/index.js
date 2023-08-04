module.exports = function toReadable (number) {
    let oneToNineteen = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

    let tenToNinety = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      
    
     
     if (number < 20 && number > 0) {
       return oneToNineteen[number];
     } 
     
     if (number >= 20 && number < 100) {
       if (number % 10 === 0) {
         return tenToNinety[number / 10]
       } else {
         return `${tenToNinety[Math.floor(number / 10)]} ${oneToNineteen[number % 10]}`
       }
     }
      
      if (number / 100 > 0) {
        if (number % 100 === 0) {
          return `${oneToNineteen[ number / 100]} hundred`
        } else if (number % 100 < 20) {
          return `${oneToNineteen[Math.floor(number / 100)]} hundred ${oneToNineteen[number % 100]}`
        } else {
          return `${oneToNineteen[Math.floor(number / 100)]} hundred ${tenToNinety[Math.floor(number % 100 / 10)]} ${oneToNineteen[number % 10]}`.trim()
        }
      } else {
      return 'zero'
      }
}
