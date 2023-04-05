export const CardCard = ({product}) =>{
    const {description, image, name, price} = product
    return(
        <div className={"row align-items-center shadow mb-3"}>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 ">
                <div className={"text-center text-sm-center "}>
                    <img src={image} alt={name} className={"w-50 "}/>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3  text-center text-sm-center">
                <p className={"mb-0 "}>{name}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3  text-center text-sm-center">
                <p className={"mb-0 fw-bold fs-5 text-primary"}>${price}</p>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 text-lg-end  text-center text-sm-center">
                <button className={"btn btn-danger btn-sm mb-2 mb-sm-2 mb-lg-0"}>Remove</button>
            </div>
        </div>
    )
}