import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-8 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

                <div className="space-y-4">
                    <h2 className="text-white text-xl font-semibold">
                        CS — Ticket System
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        CS — Ticket System is a simple platform for managing customer support, helping teams track tickets, respond faster, and deliver better service.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li> <a href="">About Us</a></li>
                        <li> <a href="">Our Mission</a></li>
                        <li> <a href="">Contact Sales</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-3 text-sm">
                        <li> <a href="">Products & Services</a></li>
                        <li> <a href="">Customer Stories</a></li>
                        <li> <a href="">Download Apps</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Information</h3>
                    <ul className="space-y-3 text-sm">
                        <li> <a href="">Privacy Policy</a></li>
                        <li> <a href="">Terms & Conditions</a></li>
                        <li> <a href="">Join Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>
                    <ul className="space-y-4 text-sm">

                        <li className="flex items-center gap-3">
                            <FaXTwitter />
                            <span>@CS — Ticket System</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaLinkedin />
                            <span>@CS — Ticket System</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaFacebook />
                            <span>@CS — Ticket System</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <FaEnvelope />
                            <span>support@cst.com</span>
                        </li>

                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer;