import {CardCard} from "../component";
import image1 from "../assets/shops/shops-1.png";
import image2 from "../assets/shops/shops-2.png";
import {UseTitle} from "../hooks/UseTitle";
export const Card = () =>{
    UseTitle("Card")
    const products = [
        {id : 1, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Casque bleutooth", price : 98, image:image1},
        {id : 2, description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sapiente.", name:"Smart Nokia", price : 755, image:image2},
        ]
    return (<div className={"myCard"}>
        {
            products.map((product)=>( <CardCard product={product}/>))
        }

    </div>)
}