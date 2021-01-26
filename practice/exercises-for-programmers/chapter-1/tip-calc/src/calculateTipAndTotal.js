function calculateTipAndTotal(bill, tip){
    //  is type of input valid?
     if(typeof bill !== 'number' || typeof tip !== 'number'){
        return 'Invalid Input'
    } else {
        // Calculate Tip       rounds decimals to tenth 
        //                     |
        let totalTip = Math.round(100*((tip * bill) * .01) )/100; 
        // Calculate Total
        let totalBill = (totalTip + bill);
        // Return Tip and Total  
        return `The tip is : $${totalTip}, The total is : $${totalBill}`;
    } 
}

module.exports = { calculateTipAndTotal }

