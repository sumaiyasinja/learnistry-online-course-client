import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-yellow-950 text-gray-800 dark:text-gray-200 pt-10 pb-6 px-5 lg:px-10 mt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Learnistry Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-50  mb-3">
            Learnistry
          </h2>
          <p className="text-sm leading-relaxed ">
            Empower your language skills with our expert-led online tutorials. Learn, grow, and connect with global tutors at your own pace.
          </p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {/* <li><Link to="/" className="hover:text-amber-800">Home</Link></li> */}
            <li><Link to="/find-tutors" className="hover:text-amber-800">Find Tutors</Link></li>
            <li><Link to="/add-tutorials" className="hover:text-amber-800">Add Tutorials</Link></li>
            <li><Link to="/my-tutorials" className="hover:text-amber-800">My Tutorials</Link></li>
            <li><Link to="/my-booked-tutors" className="hover:text-amber-800">My Booked Tutors</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-800">Help Center</a></li>
            <li><a href="#" className="hover:text-amber-800">FAQs</a></li>
            <li><a href="#" className="hover:text-amber-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-amber-800">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">
            📧 info@learnistry.com  
            <br />📞 +123 456 7890
            <br />🏢 Dhaka, Bangladesh
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-amber-800 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-800 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-amber-800 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-800 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Learnistry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
