export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
          <p className="text-gray-600">Última actualización: Enero 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Aceptación de Términos</h2>
          <p className="text-gray-700 mb-4">
            Al acceder y utilizar este sitio web, aceptas estar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes usar este sitio.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Uso Licenciado</h2>
          <p className="text-gray-700 mb-4">
            Se te otorga una licencia limitada, no exclusiva y revocable para acceder y utilizar este sitio web únicamente para propósitos personales y no comerciales.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Restricciones de Uso</h2>
          <p className="text-gray-700 mb-4">No debes:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Reproducir o distribuir contenido sin permiso</li>
            <li>Usar el sitio para actividades ilegales o no autorizadas</li>
            <li>Intentar acceder a áreas restringidas del sitio</li>
            <li>Interferir con el funcionamiento del sitio</li>
            <li>Usar bots o scrapers para extraer contenido</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Contenido de Usuarios</h2>
          <p className="text-gray-700 mb-4">
            Cualquier contenido que publiques en nuestro sitio (comentarios, reseñas, etc.) nos otorga el derecho de usar, modificar y distribuir dicho contenido.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Descargo de Responsabilidad</h2>
          <p className="text-gray-700 mb-4">
            Este sitio se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos que el contenido sea exacto, completo o libre de errores.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitación de Responsabilidad</h2>
          <p className="text-gray-700 mb-4">
            MKConsult no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Enlaces Externos</h2>
          <p className="text-gray-700 mb-4">
            Este sitio puede contener enlaces a sitios web externos. No somos responsables del contenido de estos sitios externos.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cambios en los Términos</h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del sitio constituye aceptación de los cambios.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contacto</h2>
          <p className="text-gray-700 mb-4">
            Si tienes preguntas sobre estos Términos y Condiciones, contáctanos a través de nuestro formulario de contacto.
          </p>
        </div>
      </section>
    </div>
  );
}
