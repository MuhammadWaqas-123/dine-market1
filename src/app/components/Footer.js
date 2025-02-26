import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* 1️⃣ First Section - Logo & Socials */}
        <div>
          <img src="/logo.webp" alt="Logo" className="h-7 mb-4" />
          <p className="text-black mb-4">Empowering the future of e-commerce with quality products and great service.</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/waqas-ali-87b779346/" target="blank" className="text-gray-400 hover:text-gray-500 text-xl"><FaLinkedin /></a>
            <a href="https://github.com/MuhammadWaqas-123" target="blank" className="text-gray-400 hover:text-gray-500 text-xl"><FaGithub /></a>
            <a href="https://www.youtube.com/@Code-Craft-c8s" target="blank" className="text-gray-400 hover:text-gray-500 text-xl"><FaYoutube /></a>
          </div>
        </div>

        {/* 2️⃣ Second Section - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="text-black space-y-2">
            <li><a href="#" className="hover:text-gray-500">About Us</a></li>
            <li><a href="#" className="hover:text-gray-500">Careers</a></li>
            <li><a href="#" className="hover:text-gray-500">Press</a></li>
          </ul>
        </div>

        {/* 3️⃣ Third Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-black space-y-2">
            <li><a href="#" className="hover:text-gray-500">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-500">Support</a></li>
            <li><a href="#" className="hover:text-gray-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* 4️⃣ Fourth Section - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-black space-y-2">
            <li>Email: mw4061085@gmail.com</li>
            <li>Phone: +92 3325498508</li>
            <li>Address: islamabad pakistan</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
