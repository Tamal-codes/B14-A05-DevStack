import footerLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="flex justify-between container mx-auto">

            <div>
                <img src={footerLogo} alt="" />
                <p className="text-sm text-gray-500"> Crated tools, technologies , and resources for developer building <br />
                    modern software .</p>


                <ul className="flex gap-4 list-none font-bold text-sm text-gray-700">
                    <li><a href="https://github.com">GitHub</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://linkedin.com">LinkedIn</a></li>
                </ul>
            </div>


            <div className="list-none">
                <span className="font-bold">
                    PRODUCT
                </span>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </div>



            <div className="list-none">
                <span className="font-bold">
                    COMPANY
                </span>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </div>



            <div className="list-none">
                <span className="font-bold">
                    LEGAL
                </span>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </div>










        </div>
    );
};

export default Footer;