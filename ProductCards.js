function ProductCards({title,price,image,rating}){
    return (
       
        <div className="card">
            <img src={image}/>
            <p>{title}</p>
            <p>${price}</p>
           {/* //<p>{rating}</p> */}
        </div>

        // <>
        
        // <h1>products name : {props.name}</h1>
        // <h2>products price : {props.price}</h2>

        // </>
    )
}


// function ProductCards(props){
//     return (
//         console.log(props)
//         // <>
        
//         // <h1>products name : {props.name}</h1>
//         // <h2>products price : {props.price}</h2>

//         // </>
//     )
// }
export default ProductCards;