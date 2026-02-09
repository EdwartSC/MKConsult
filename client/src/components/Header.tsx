import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const services = [
    { name: "Facebook Ads", href: "/services/facebook-ads" },
    { name: "SEO", href: "/services/seo" },
    { name: "Email Marketing", href: "/services/email-marketing" },
    { name: "Content Marketing", href: "/services/content-marketing" },
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Estrategia Digital", href: "/services/digital-strategy" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 font-bold text-2xl text-gray-900 hover:text-blue-600 transition cursor-pointer">
              <span className="text-blue-600">MK</span>Consult
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/blog-mejorado">
              <div className="text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer">
                Blog
              </div>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-1">
                Servicios
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 py-2">
                {services.map((service) => (
                  <Link key={service.href} href={service.href}>
                    <div className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                      {service.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/libros-recomendados">
              <div className="text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer">
                Libros
              </div>
            </Link>

            <Link href="/faq">
              <div className="text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer">
                FAQ
              </div>
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <Link href="/admin/articles">
                    <div className="text-gray-700 hover:text-blue-600 transition font-medium cursor-pointer">
                      Admin
                    </div>
                  </Link>
                  <Button
                    variant="outline"
                    onClick={() => logout()}
                    className="text-gray-700"
                  >
                    Salir
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => (window.location.href = getLoginUrl())}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Iniciar Sesión
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link href="/blog-mejorado">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                Blog
              </div>
            </Link>

            {/* Mobile Services */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 flex items-center justify-between"
            >
              Servicios
              <ChevronDown
                className={`w-4 h-4 transition ${isServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServicesOpen && (
              <div className="bg-gray-50">
                {services.map((service) => (
                  <Link key={service.href} href={service.href}>
                    <div className="block px-8 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                      {service.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <Link href="/libros-recomendados">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                Libros
              </div>
            </Link>

            <Link href="/faq">
              <div className="block px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                FAQ
              </div>
            </Link>

            {isAuthenticated ? (
              <>
                <Link href="/admin/articles">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                    Admin
                  </a>
                </Link>
                <button
                  onClick={() => logout()}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Salir
                </button>
              </>
            ) : (
              <Button
                onClick={() => (window.location.href = getLoginUrl())}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Iniciar Sesión
              </Button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
