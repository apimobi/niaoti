import routeConstants from "../constants/routeConstants";
import { Link } from "react-router-dom";
import { Icons } from "../assets//icons";

const Footer = () => {
    return (
        <footer className="bg-white text-white border-[1px] border-solid border-white w-full mx-auto">
            <div className="flex flex-col items-center text-black bg-white px-4 py-[10px]">
                <div className="">
                        @copyright {new Date().getFullYear()}
                </div>
                <div className="">
                    <Link to={routeConstants.ROOT} className="">
                        <img className="max-w-[100px]" src={Icons.logo} alt="site logo" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;