for(var i=0; i<=12; i++){
    for(var j=1; j<=12; j++){
        let product = i * j;
        console.log( i + " x " + j + " = " + product)
    }
}


// Alternative ( Possibly Better) Solution

            // prints out numbers 1-12 as an array
let table = [...Array(13).keys()];

table.map( i => {
  table.map( j => {
    let product = i * j;
    console.log( i + " x " + j + " = " + product)
  })
})
