import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router";

export default function Footer(){
    return(
        <IconContext.Provider value={{ style: { color: 'var(--color-green-200)' } }}>
        <footer className="border-t-2">
            <div className="flex footer-wrapper p-4 justify-between">
                <div className="contacts flex">
                    <Link className="p-3" to="https://facebook.com" target="_blank"><FaFacebook size={50} color={'text-green-200'}/></Link>
                    <Link className="p-3" to="https://facebook.com" target="_blank"><FaInstagram size={50}/></Link>
                </div>
                <div className="address-wrapper self-center">
                    Fake Str, New York
                </div>
            </div>
        </footer>
        </IconContext.Provider>
    );
}; 