import casque from "../assets/media/shops-8.png"
import {ProductCard} from "../component";
import image1 from "../assets/shops/shops-1.png"
import image2 from "../assets/shops/shops-2.png"
import image3 from "../assets/shops/shops-3.png"
import image4 from "../assets/shops/shops-4.png"
import image5 from "../assets/shops/shops-5.png"
import image6 from "../assets/shops/shops-6.png"
import image7 from "../assets/shops/shops-7.png"
import image8 from "../assets/shops/shops-8.png"
import image9 from "../assets/shops/shops-9.png"
import image10 from "../assets/shops/shops-10.png"
import {UseTitle} from "../hooks/UseTitle";
export const Home = () =>{
    UseTitle("Home")
    const products = [
        {id : 1, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Casque bleutooth", price : 98, image:image1},
        {id : 2, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Smart Nokia", price : 755, image:image2},
        {id : 3, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Telephone Alcatel", price : 466, image:image3},
        {id : 4, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Iphone 12", price : 290, image:image4},
        {id : 5, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Casque Sport", price : 50, image:image5},
        {id : 6, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Casque Sport", price : 160, image:image6},
        {id : 7, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Techno Spark", price : 390, image:image7},
        {id : 8, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Casque gamer", price : 123, image:image8},
        {id : 9, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"AirPods", price : 400, image:image9},
        {id : 10, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.",name:"Casquette ", price : 55, image:image10},
    ]
    return(
        <section className={"home"}>
                <div className={"row mt-5"}>
                    {
                        products.map((product) => (
                            <ProductCard key ={product.id} product = {product}/>
                        ))
                    }
                </div>
        </section>
    )
}