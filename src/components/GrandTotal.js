const GrandTotal = ({grocery}) => {
    const grandtotal = grocery.reduce((acc,item)=>{
        return  acc += item.units * item.price
      },0)
    return (
        <span>
            GrandTotal : {grandtotal}
        </span>
    )
}

export default GrandTotal
