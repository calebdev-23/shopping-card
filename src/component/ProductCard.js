import casque from "../assets/shops/shops-7.png";
export const ProductCard = ({product}) =>{
   const {description, image, name, price} = product
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 ">
            <div className={"card shadow"}>
                <div className={"text-center"}>
                    <img src={image} alt="w-25" className={"w-50 "}/>
                </div>
                <div className={"card-body pt-0"}>
                    <p className={"fw-semibold mb-0"}>{name}</p>
                    <p>
                        {description}
                    </p>
                    <div className={"d-flex justify-content-between align-items-center flex-sm-wrap"}>
                        <span className={"fs-5 fw-bold"}>${price} </span>
                        <button className={"btn btn-primary btn-sm"}>Add to Card</button>
                    </div>

                </div>
            </div>
        </div>
    )
}