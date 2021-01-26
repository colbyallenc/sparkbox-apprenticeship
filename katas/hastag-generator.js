// The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function hashtag(str){
    if(str.length >= 140 || str.length <= 0 || typeof(str) == undefined){
      return false
    }
  
    let squashedStr = str
    let capitalizeStr = str.replace(/\b\w/g, l => l.toUpperCase())
    if(capitalizeStr.search(' ') > -1) {
       squashedStr = capitalizeStr.replace(/\s/g,''); 
    }
  
    let hashtag = `#${squashedStr}`
    return hashtag
  }
  
  
  hashtag("code" + " ".repeat(140) + "wars")
  console.log("code" + " ".repeat(140) + "wars")