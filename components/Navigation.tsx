import { PERSONAL_INFO } from "@/lib/constants";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors duration-300"
          >
            Sayan S.
          </a>

          {/* Optional: Navigation Links (for future expansion) */}
          <div className="flex items-center gap-6">
            {/* Future navigation items can go here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
