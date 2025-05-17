export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} EduLearn. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
