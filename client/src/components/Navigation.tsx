import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center space-x-2 font-bold text-xl text-blue-600 hover:text-blue-700">
            <span className="bg-blue-600 text-white px-3 py-1 rounded">MK</span>
            <span>Consult</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/blog">
            <a className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
          </Link>
          <Link href="/servicios">
            <a className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
          </Link>
          <Link href="/libros-recomendados">
            <a className="text-gray-700 hover:text-blue-600 transition-colors">Libros</a>
          </Link>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-4">
            <Link href="/blog">
              <a className="block text-gray-700 hover:text-blue-600 py-2">Blog</a>
            </Link>
            <Link href="/servicios">
              <a className="block text-gray-700 hover:text-blue-600 py-2">Servicios</a>
            </Link>
            <Link href="/libros-recomendados">
              <a className="block text-gray-700 hover:text-blue-600 py-2">Libros Recomendados</a>
            </Link>
            <a
              href="#contact"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
