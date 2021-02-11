import React from 'react'

function Home(props) {
    console.warn("props" , props)
    return (
        <div>
            <div className="add-to-cart">
                  <span className="cart-count">{props.cardData.length}</span>  
                    <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" />
                </div>
            <h1>Home Component !</h1>
            <div className="cart-wrapper">
                
                <div className="img-wrapper item">
                    <img src="https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_2560%2Cc_limit/iphonexr.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>

                        <button  style={{background: "blue" ,margin:"2%"}} 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove Cart</button>
                </div>
            </div>
        </div>
       
    )
}

export default Home
