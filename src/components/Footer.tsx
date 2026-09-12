import footerLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="container mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row justify-between gap-8 pb-8">
                <div className="space-y-4">
                    <img src={footerLogo} alt="Dev Stack Logo" />
                    <p className="text-sm text-gray-500">
                        Curated tools, technologies, and resources for developers building <br className="hidden md:inline" />
                        modern software.
                    </p>

                    <ul className="flex gap-4 list-none font-bold text-sm text-gray-700">
                        <li><a href="https://github.com">GitHub</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://linkedin.com">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:gap-16 gap-8">
                    <div>
                        <span className="font-bold text-sm text-gray-900 block mb-3">
                            PRODUCT
                        </span>
                        <ul className="list-none text-sm text-gray-500 space-y-2">
                            <li>Home</li>
                            <li>Technologies</li>
                            <li>Projects</li>
                        </ul>
                    </div>

                    <div>
                        <span className="font-bold text-sm text-gray-900 block mb-3">
                            COMPANY
                        </span>
                        <ul className="list-none text-sm text-gray-500 space-y-2">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <span className="font-bold text-sm text-gray-900 block mb-3">
                            LEGAL
                        </span>
                        <ul className="list-none text-sm text-gray-500 space-y-2">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;