"use client";

import { useState } from 'react';

export default function Home() {
  const [nombre, setNombre] = useState('');
  const [mensajeExtra, setMensajeExtra] = useState('');

  const handleConsultaDirecta = (e: React.FormEvent) => {
    e.preventDefault();
    const textoWhatsApp = encodeURIComponent(
      `Hola VZ Webs! Te hago una consulta desde la web:\n\n` +
      `• Nombre: ${nombre || 'No especificado'}\n` +
      `• Consulta: ${mensajeExtra || 'Quisiera más información sobre los servicios web.'}`
    );

    window.open(`https://wa.me/5492323357985?text=${textoWhatsApp}`, '_blank');
  };

  const enviarWhatsAppPlan = (planNombre: string, precio: string) => {
    const textoWhatsApp = encodeURIComponent(
      `Hola VZ Webs! Me interesa contratar o consultar por el plan:\n\n` +
      `• Servicio: ${planNombre}\n` +
      `• Precio referencial: ${precio}\n\n` +
      `¿Podemos coordinar los detalles?`
    );
    window.open(`https://wa.me/5492323357985?text=${textoWhatsApp}`, '_blank');
  };

  const servicios = [
    {
      id: 'landing',
      titulo: 'Landing Page',
      precio: '$180.000 ARS',
      precioUsd: '180 USD',
      subtitulo: 'Diseño enfocado en conversiones rápidas y promociones específicas.',
      features: [
        'Entrega rápida (1 a 5 días hábiles)',
        '30 días de soporte y garantía post-entrega',
        'Diseño de página única (One-page)',
        'Optimizada 100% para celulares',
        'Botón directo a WhatsApp',
        'Formulario de contacto',
        'Carga ultra rápida'
      ],
      destacado: false
    },
    {
      id: 'institucional',
      titulo: 'Web Profesional',
      precio: '$270.000 ARS',
      precioUsd: '270 USD',
      subtitulo: 'Ideal para PyMEs, empresas y profesionales que buscan autoridad digital.',
      features: [
        'Entrega rápida (1 a 5 días hábiles)',
        '60 días de soporte y garantía post-entrega',
        'Múltiples secciones (Inicio, Nosotros, Servicios, etc.)',
        'Diseño corporativo a medida',
        'Integración con WhatsApp y Google Maps',
        'Optimización básica SEO',
        'Estructura escalable'
      ],
      destacado: true
    },
    {
      id: 'tienda',
      titulo: 'Tienda Online',
      precio: '$450.000 ARS',
      precioUsd: '450 USD',
      subtitulo: 'Catálogo de productos organizado para vender y recibir pedidos por WhatsApp.',
      features: [
        'Entrega rápida (1 a 5 días hábiles)',
        '90 días de soporte y garantía post-entrega',
        'Catálogo de productos estructurado',
        'Carrito de compras simplificado',
        'Envío de pedido automático a WhatsApp',
        'Buscador e integración de stock',
        'Panel autogestionable'
      ],
      destacado: false
    }
  ];

  const trabajos = [
    {
      titulo: 'Indumar',
      subtitulo: 'Sitio Web Corporativo e Industrial',
      descripcion: 'Desarrollo web para Indumar, empresa especializada en soluciones marinas e industriales. Presentación de catálogo, productos y contacto directo.',
      link: 'https://www.indumar.com.ar',
      tags: ['Web Corporativa', 'Catálogo Industrial', 'Diseño Responsive'],
      imagen: '/images/indumar.jpg'
    },
    {
      titulo: 'SGA - Gestión Ambiental',
      subtitulo: 'Sitio Web + Cotizador Express',
      descripcion: 'Desarrollo web integral para empresa de fumigación y control de plagas con cotizador interactivo por pasos conectado a WhatsApp.',
      link: 'https://sgafumigaciones.com.ar',
      tags: ['Next.js', 'Tailwind CSS', 'WhatsApp API'],
      imagen: '/images/foto4.jpg'
    }
  ];

  const faqs = [
    {
      q: '¿Cuánto tarda en entregarse la página web?',
      a: 'Nos destacamos por nuestra entrega rápida: tu sitio estará listo y listo para publicar en un lapso de 1 a 5 días hábiles, según el proyecto y la entrega del contenido.'
    },
    {
      q: '¿Qué incluye el soporte post-entrega?',
      a: 'Incluimos de 30 a 90 días de soporte técnico gratuito según el plan contratado. Cubre corrección de errores, pequeños ajustes de contenido o imágenes y resolución de dudas técnicas para tu tranquilidad.'
    },
    {
      q: '¿El pago es único o mensual?',
      a: 'El desarrollo de la web es un pago único. No cobramos abonos mensuales obligatorios de mantenimiento.'
    },
    {
      q: '¿Cómo es la forma de pago?',
      a: 'Trabajamos con un 50% de seña para iniciar el proyecto y el 50% restante contra entrega y aprobación final.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased relative">
      
      {/* NAVBAR */}
      <header className="border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-white">
              VZ<span className="text-blue-500">WEBS</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#portafolio" className="hover:text-white transition-colors">Trabajos</a>
            <a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
          </nav>

          <a
            href="https://wa.me/5492323357985"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg transition-all"
          >
            WhatsApp Directo
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-20 pb-16 px-6 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-block bg-neutral-900 border border-neutral-800 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-medium">
          Diseño & Desarrollo Web a Medida
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Sitios web profesionales para <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
            potenciar y escalar tu negocio
          </span>
        </h1>

        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Páginas ultrarrápidas, 100% adaptadas a celulares y con <strong className="text-white font-semibold">entrega garantizada de 1 a 5 días hábiles</strong>.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#precios"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-lg transition-all text-sm uppercase tracking-wide"
          >
            Ver Planes y Precios
          </a>
          <a
            href="#consultas"
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-medium px-7 py-3.5 rounded-lg border border-neutral-800 transition-all text-sm"
          >
            Hacer una Consulta
          </a>
        </div>
      </section>

      {/* BENEFICIOS / MÉRITOS */}
      <section className="py-12 border-y border-neutral-900 bg-neutral-900/30 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Entrega Rápida</h3>
            <p className="text-sm text-neutral-400">Tu página online y lista para vender en solo 1 a 5 días hábiles.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Diseño 100% Responsivo</h3>
            <p className="text-sm text-neutral-400">Excelente visualización en teléfonos, tablets y computadoras.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">Soporte y Garantía</h3>
            <p className="text-sm text-neutral-400">Hasta 90 días de soporte post-entrega para asistirte en todo momento.</p>
          </div>
        </div>
      </section>

      {/* PLANES Y PRECIOS */}
      <section id="precios" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-2 mb-14">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">Precios Transparentes</h2>
          <p className="text-3xl font-extrabold text-white">Elegí el plan ideal para tu negocio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((s) => (
            <div
              key={s.id}
              className={`bg-neutral-900 border rounded-xl p-6 flex flex-col justify-between space-y-6 relative transition-all ${
                s.destacado 
                  ? 'border-blue-500 ring-1 ring-blue-500/50 shadow-xl' 
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {s.destacado && (
                <span className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                  Más Elegido
                </span>
              )}

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{s.titulo}</h3>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">{s.precio}</span>
                  <span className="text-sm font-medium text-neutral-400 mt-0.5">{s.precioUsd}</span>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed">{s.subtitulo}</p>
                <div className="border-t border-neutral-800 my-4"></div>
                <ul className="space-y-3">
                  {s.features.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2.5">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => enviarWhatsAppPlan(s.titulo, s.precio)}
                className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider text-center transition-all ${
                  s.destacado
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                }`}
              >
                Contratar por WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PORTAFOLIO / TRABAJOS RECIENTES */}
      <section id="portafolio" className="py-20 bg-neutral-900/30 border-t border-neutral-900 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">Portafolio</h2>
            <p className="text-3xl font-extrabold text-white">Nuestros Trabajos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trabajos.map((trabajo, idx) => (
              <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800">
                    <img
                      src={trabajo.imagen}
                      alt={trabajo.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">{trabajo.subtitulo}</span>
                  <h3 className="text-2xl font-bold text-white">{trabajo.titulo}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {trabajo.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {trabajo.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-neutral-950 text-neutral-400 border border-neutral-800 text-xs px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={trabajo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors pt-2"
                >
                  <span>Visitar sitio web</span> →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto border-t border-neutral-900">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">Respuestas Claras</h2>
          <p className="text-3xl font-extrabold text-white">Preguntas Frecuentes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl space-y-2">
              <h3 className="text-base font-bold text-white">{faq.q}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTAS DIRECTAS */}
      <section id="consultas" className="py-20 bg-neutral-900/50 border-t border-neutral-900 px-6">
        <div className="max-w-xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-blue-500 uppercase tracking-widest">Contacto Directo</h2>
            <p className="text-3xl font-extrabold text-white">¿Tenés alguna duda?</p>
            <p className="text-neutral-400 text-sm">Escribinos directamente y te respondemos por WhatsApp.</p>
          </div>

          <form onSubmit={handleConsultaDirecta} className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-xl space-y-5">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">Tu Nombre</label>
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Ej: Valentino" 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">Consulta o Proyecto</label>
              <textarea 
                rows={4}
                value={mensajeExtra} 
                onChange={(e) => setMensajeExtra(e.target.value)} 
                placeholder="Escribí tu consulta acá..." 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-lg transition-all uppercase tracking-wider text-xs flex items-center justify-center gap-2"
            >
              <span>💬</span> Enviar mensaje a WhatsApp (+54 9 2323 357985)
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-neutral-900 bg-neutral-950 text-center text-xs text-neutral-600 space-y-2">
        <p>© {new Date().getFullYear()} VZ Webs — Desarrollo Web Profesional.</p>
        <p className="text-neutral-500">WhatsApp: +54 9 2323 357985</p>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href="https://wa.me/5492323357985"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center justify-center"
      >
        <svg 
          className="w-7 h-7 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

    </div>
  );
}