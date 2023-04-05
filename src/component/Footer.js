import logo from "../assets/logo2.png"
export const Footer = () =>{
    return(
        <footer className={""}>
            <div className={"row m-0 px-5 bg-dark py-4 text-center text-sm-center text-md-start text-lg-start align-items-center"}>
                <div className="col-md-4 col-lg-3 ">
                    <img src={logo} alt="logo" className={"logo mb-2 mb-lg-0 mb-md-0 mb-sm-2"}/>
                </div>
                <div className="col-md-4 col-lg-3">
                    <span className={"fw-bold"}>PRODUCTS</span>
                    <div className={"mt-3"}>
                        <ul className={"list-unstyled"}>
                            <li>MDBootstrap</li>
                            <li>MDWordPress</li>
                            <li>BrandFlow</li>
                            <li>Bootstrap Angular</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3">
                    <span className={"fw-bold"}>USEFUL LINKS</span>
                    <div className={"mt-3"}>
                        <ul className={"list-unstyled"}>
                            <li>Your Account</li>
                            <li>Become an Affiliale</li>
                            <li>Shopping Rates</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3">
                    <span className={"fw-bold"}>CONTACT</span>
                    <div className={"mt-3"}>
                        <ul className={"list-unstyled"}>
                            <li>
                                <i className="bi bi-house-door"></i>
                                New York, NY 10012, US
                            </li>
                            <li>
                                <i className="bi bi-envelope"></i>
                                calebdev777@gmail.com
                            </li>
                            <li>
                                <i className="bi bi-telephone-plus"></i>
                                032.39.989.17
                            </li>
                            <li>
                                <i className="bi bi-person-vcard"></i>
                                033.11.938.77
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"bottom text-center py-2"}>
                <p className={"mb-0"}>Caleb-Dev 2023</p>
            </div>
        </footer>
    )
}