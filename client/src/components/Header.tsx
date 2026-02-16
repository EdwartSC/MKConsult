import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Service = {
  name: string;
  subtitle: string;
  href: string;
};

export default function Header() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

  const services: Service[] = [
    {
      name: "Consultoría Estratégica Tecnológica",
      subtitle: "Diagnóstico ejecutivo para decisiones tecnológicas de alto impacto.",
      href: "/services/consultoria-estrategica-tecnologica",
    },
    {
      name: "Automatización y Optimización de Procesos",
      subtitle: "Diseño e implementación de flujos operativos más eficientes.",
      href: "/services/automatizacion-optimizacion-procesos",
    },
    {
      name: "Desarrollo y Soluciones Técnicas",
      subtitle: "Soluciones técnicas a medida para necesidades críticas de negocio.",
      href: "/services/desarrollo-soluciones-tecnicas",
    },
  ];

  const handleClientsClick = () => {
    console.log("Área privada próximamente");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-900 hover:text-blue-600 transition">
            <span className="text-blue-600">MK</span>Consult
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Blog
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-1"
              >
                Servicios
                <ChevronDown className="w-4 h-4" />
              </button>

              <div className="absolute left-0 mt-0 w-[380px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 py-2 border border-slate-100">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 hover:bg-blue-50"
                  >
                    <p className="text-sm font-semibold text-slate-900">{service.name}</p>
                    <p className="text-xs text-slate-600 mt-1">{service.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/libros-recomendados" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Libros
            </Link>

            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition font-medium">
              FAQ
            </Link>

            <Button
              onClick={handleClientsClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Área Clientes
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
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
            <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Blog
            </Link>

            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
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
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-8 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    <p className="text-sm font-semibold text-slate-900">{service.name}</p>
                    <p className="text-xs text-slate-600 mt-1">{service.subtitle}</p>
                  </Link>
                ))}
              </div>
            )}

            <Link href="/libros-recomendados" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              Libros
            </Link>

            <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
              FAQ
            </Link>

            <Button
              onClick={handleClientsClick}
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Área Clientes
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
