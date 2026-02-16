import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const linkBase =
  "text-slate-300/90 hover:text-blue-400 transition-colors duration-200 text-sm leading-relaxed";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-100">
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14">
            <div className="space-y-5">
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-blue-400 font-semibold mb-3">
                  MKConsult
                </p>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Partner estratégico
                  <br />
                  técnico-operativo
                </h3>
                <p className="text-slate-300/90 text-sm leading-relaxed max-w-sm">
                  Acompañamos decisiones tecnológicas de alto impacto con diagnóstico,
                  optimización de procesos y ejecución técnica a medida.
                </p>
              </div>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-colors"
              >
                Solicitar Diagnóstico Estratégico
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/consultoria-estrategica-tecnologica" className={linkBase}>
                    Consultoría Estratégica Tecnológica
                  </Link>
                </li>
                <li>
                  <Link href="/services/automatizacion-optimizacion-procesos" className={linkBase}>
                    Automatización y Optimización de Procesos
                  </Link>
                </li>
                <li>
                  <Link href="/services/desarrollo-soluciones-tecnicas" className={linkBase}>
                    Desarrollo y Soluciones Técnicas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5">Recursos</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/servicios" className={linkBase}>
                    Vista general de servicios
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={linkBase}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={linkBase}>
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className={linkBase}>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5">Información de contacto</h4>
              <div className="space-y-4 text-sm text-slate-300/90">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                  <div>
                    <p className="text-slate-200 font-medium">Correo</p>
                    <p>contacto@mkconsult.tech</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                  <div>
                    <p className="text-slate-200 font-medium">Atención</p>
                    <p>Lunes a viernes · Agenda previa</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
                  <div>
                    <p className="text-slate-200 font-medium">Modalidad</p>
                    <p>Remoto · LATAM y España</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/60 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-400">
            <p>© 2026 MKConsult. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <Link href="/politica-privacidad" className="hover:text-blue-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos-condiciones" className="hover:text-blue-400 transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
