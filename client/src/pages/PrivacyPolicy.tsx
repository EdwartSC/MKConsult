export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: Enero 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introducción</h2>
          <p className="text-gray-700 mb-4">
            MKConsult ("nosotros", "nuestro" o "la Empresa") respeta la privacidad de nuestros usuarios ("usuario" o "usted"). Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Información que Recopilamos</h2>
          <p className="text-gray-700 mb-4">Recopilamos información de varias maneras:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Información que usted proporciona voluntariamente (nombre, email, teléfono)</li>
            <li>Información recopilada automáticamente (cookies, dirección IP, tipo de navegador)</li>
            <li>Información de terceros (plataformas de análisis, redes publicitarias)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Uso de la Información</h2>
          <p className="text-gray-700 mb-4">Utilizamos la información recopilada para:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Proporcionar, mantener y mejorar nuestros servicios</li>
            <li>Procesar transacciones y enviar notificaciones relacionadas</li>
            <li>Enviar comunicaciones de marketing (con tu consentimiento)</li>
            <li>Responder a tus consultas y solicitudes de soporte</li>
            <li>Analizar el uso del sitio para mejorar la experiencia del usuario</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies y Tecnologías de Seguimiento</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio. Puedes controlar las cookies a través de la configuración de tu navegador.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Seguridad de la Información</h2>
          <p className="text-gray-700 mb-4">
            Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Tus Derechos de Privacidad</h2>
          <p className="text-gray-700 mb-4">Dependiendo de tu ubicación, puedes tener derechos como:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Acceso a tus datos personales</li>
            <li>Corrección de datos inexactos</li>
            <li>Eliminación de tus datos</li>
            <li>Portabilidad de datos</li>
            <li>Oposición al procesamiento</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contacto</h2>
          <p className="text-gray-700 mb-4">
            Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctanos a través de nuestro formulario de contacto.
          </p>
        </div>
      </section>
    </div>
  );
}
