import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Torque. Executive Decision Intelligence.
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <Link className="text-zinc-700 hover:text-zinc-900 transition-colors" to="/audit">
            Executive Audit
          </Link>
          <Link className="text-zinc-700 hover:text-zinc-900 transition-colors" to="/90-day">
            90-Day Reset
          </Link>
          <Link className="text-zinc-700 hover:text-zinc-900 transition-colors" to="/platform">
            Platform
          </Link>
          <Link className="text-zinc-700 hover:text-zinc-900 transition-colors" to="/insights">
            Insights
          </Link>
          <Link className="text-zinc-700 hover:text-zinc-900 transition-colors" to="/about">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
