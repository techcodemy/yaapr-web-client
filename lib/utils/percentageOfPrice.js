const IntoPercentage = (amount,discount) => {
    let diff = amount - discount
   
    let per = diff * 100

    const percen = per / amount
    return Math.round(percen * 10) /10;
}

export default IntoPercentage;