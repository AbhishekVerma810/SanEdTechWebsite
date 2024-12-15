import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center border-t py-10 px-4 bg-gray-100">
      <div className="flex flex-col items-center w-full max-w-[1280px] gap-5">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Replace this with your logo SVG */}
              <text
                x="0"
                y="35"
                fill="black"
                fontSize="32"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                LearnPlus
              </text>
            </svg>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col lg:flex-row w-full justify-between gap-8 lg:items-start">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-800">Courses</h3>
            <Link href="/courses/programming">Programming</Link>
            <Link href="/courses/design">Design</Link>
            <Link href="/courses/marketing">Marketing</Link>
            <Link href="/courses/business">Business</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-800">Resources</h3>
            <Link href="/blogs">Blogs</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/community">Community</Link>
            <Link href="/faq">FAQs</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-800">Company</h3>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full max-w-md mt-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mt-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 mt-10">
          <h1>Founder Abhi verma</h1>
          <p>
            &copy; {new Date().getFullYear()} LearnPlus. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
