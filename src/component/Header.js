import {Link, NavLink} from "react-router-dom";
import logo from "../assets/logo2.png"
import Pc from "../assets/media/pc1.jpg"
import {useCard} from "../context/ContextCard";
export const Header = () =>{
    const {cardList} = useCard()
    return(
        <section className={"header container"}>
            <nav className="navbar navbar-expand-lg mb-4 py-2 ">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" className={"logo"}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto  mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"}  aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=> isActive? "nav-link active" : "nav-link"} to="/card">Card</NavLink>
                            </li>
                            {
                                /*
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                                 */
                            }
                        </ul>
                        <div>
                            <span>Card : {cardList.length}</span>
                        </div>

                    </div>
                </div>
            </nav>
            <div className={"landing-page"}>

            </div>
        </section>
    )
}