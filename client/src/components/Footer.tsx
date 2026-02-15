import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Recibe Estrategias de Marketing</h3>
              <p className="text-blue-100">
                Suscríbete a nuestro newsletter y recibe guías, tips y estrategias cada semana.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-white text-gray-900 px-4 py-3"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 whitespace-nowrap">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-4">MKConsult</h3>
              <p className="text-gray-400 mb-4">
                Plataforma de consultoría y educación en marketing digital para PYMES y emprendedores.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>contacto@mkconsult.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Online - Disponible 24/7</span>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/facebook-ads">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Facebook Ads</div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">SEO</div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/email-marketing">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Email Marketing</div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/content-marketing">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Content Marketing</div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/google-ads">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Google Ads</div>
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-strategy">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Estrategia Digital</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="text-white font-bold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Blog</div>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Artículos</div>
                  </Link>
                </li>
                <li>
                  <Link href="/libros-recomendados">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Libros Recomendados</div>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Preguntas Frecuentes</div>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Contacto</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/politica-privacidad">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Política de Privacidad</div>
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-condiciones">
                    <div className="text-gray-400 hover:text-white transition cursor-pointer">Términos y Condiciones</div>
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Aviso Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-white font-bold mb-4">Síguenos en Redes Sociales</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/mkconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/mkconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/mkconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/mkconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2026 MKConsult. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Hecho con ❤️ para ayudarte a escalar tu negocio digital
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
