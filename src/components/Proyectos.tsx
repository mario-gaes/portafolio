// Proyectos.tsx
import { type FunctionComponent, useRef, useState, useEffect } from "react";
import "./Proyectos.css";

import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaLock } from 'react-icons/fa';

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";

// Definimos las props que Proyectos espera de su padre (App.tsx)
interface ProyectosProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean;
}

const Proyectos: FunctionComponent<ProyectosProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Lista de proyectos destacados
  const projects = [
    {
      title: "CosturasChuy – Sistema POS offline-first",
      description: "Ecosistema POS offline-first para un taller de costuras, con app de escritorio (React/Electron) y app móvil nativa (Android Studio/Kotlin) que operan sin conexión a internet mediante arquitectura de peticiones locales, manteniendo el plan gratuito de Firebase. Automatiza el seguimiento de más de 450 pedidos mensuales —antes gestionado a mano— con notificaciones al cliente vía WhatsApp (API de Twilio) y sincronización de lectores QR con impresión automática de tickets.",
      techniques: ["React", "Electron", "Android Studio", "Kotlin", "Node.js", "Firebase", "TwilioAPI"],
      imageUrl: p1,
      githubUrls: [],
      liveUrl: null,
      isPrivate: true,
    },
    {
      title: "KapraDesign – Seguimiento de pedidos y tareas",
      description: "Digitaliza la cadena de producción textil con un dashboard en React y una app móvil (React Native/Expo), reemplazando la asignación de tareas por grupo de WhatsApp para 20 empleados por notificaciones push y asignación directa por área y responsable. Arquitectura serverless con Supabase para sincronización en tiempo real y trazabilidad completa del pedido, desde la recepción hasta la entrega, e integración con la API de Google Sheets. Publicada en la App Store; adopción total del equipo en la primera semana gracias a la optimización de UI/UX, sin capacitación adicional.",
      techniques: ["React Native", "TypeScript", "Expo", "Supabase"],
      imageUrl: p3,
      githubUrls: [],
      liveUrl: null,
      isPrivate: true,
    },
    {
      title: "AgroControlPro – Monitoreo y trazabilidad ganadera",
      description: "Mención honorífica ante 10 equipos competidores en el galardón estatal DuranIA 2026. MVP de trazabilidad bovina compuesto por app móvil, dispositivo IoT y backend modular en microservicios desplegado con Azure Container Apps. Visión por computadora para conteo automatizado de ganado y análisis de postura (en pie o echado), y modelos de Machine Learning que predicen celo y fiebre a partir de telemetría IoT para optimizar la toma de decisiones. Incluye un agente de IA (Azure OpenAI) para automatizar procesos administrativos y análisis de documentos.",
      techniques: ["Flutter", "Dart", "Firebase", "Node.js", "PostgreSQL", "Python", "Azure", "Computer Vision", "Machine Learning"],
      imageUrl: p4,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario-gaes/ProyectoGalardonDurania.git" },
      ],
      liveUrl: null,
    },
    {
      title: "FocusTrack – Monitoreo de hábitos al conducir",
      description: "Sistema multiagente (AutoGen) que detecta fatiga, somnolencia y distracciones al conducir mediante Computer Vision y Machine Learning, enviando notificaciones a contactos de confianza e integrando una agenda de viajes. Los agentes de IA apoyan la toma de decisiones y pueden activar directamente los actuadores del dispositivo. Backend en Express.js con transmisión de datos en tiempo real vía MQTT a un broker en la nube bajo protocolos seguros con cifrado de la informacion2.",
      techniques: ["Flutter", "Dart", "Nest.js", "Next.js", "Docker", "PostgreSQL", "Redis", "TypeScript", "Azure", "MQTT", "Python", "AutoGen", "Computer Vision", "Machine Learning"],
      imageUrl: p6,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario-gaes/FocusTrackBackend.git" }
      ],
      liveUrl: null,
    },
    {
      title: "HydroLink – Sistema de riego inteligente",
      description: "Sistema IoT para riego agrícola automatizado: sensores de humedad y temperatura envían datos en tiempo real vía MQTT, optimizando el uso del agua mediante algoritmos inteligentes. Backend escalable en AWS con API REST y app móvil (React Native) para monitoreo remoto del sistema de riego.",
      techniques: ["React Native", "Docker", "MQTT", "PostgreSQL", "Express", "C++", "AWS"],
      imageUrl: p2,
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario-gaes/api-pub-sub" },
        { name: "App", url: "https://github.com/mario-gaes/hydro-app" },
        { name: "IoT", url: "https://github.com/mario-gaes/HydrolinkArduino" },
      ],
      liveUrl: null,
    },
    {
      title: "Microservices-TechShop",
      description: "Plataforma e-commerce bajo arquitectura de microservicios (auth, catálogo, pagos) con API Gateway, backend en NestJS y Next.js con SSR para optimizar SEO, escalabilidad y latencia, con caché en Redis. Pipeline de CI/CD con GitHub Actions y despliegue automatizado a AWS EC2, con pruebas automatizadas y linting (ESLint) como requisitos previos al deploy.",
      techniques: ["Nest.js", "Next.js", "Docker", "PostgreSQL", "Redis", "TypeScript"],
      imageUrl: p7,
      githubUrls: [
        { name: "Backend", url: "https://github.com/mario-gaes/tech-shop-backend.git" },
        { name: "Frontend", url: "https://github.com/mario-gaes/tech-shop-frontend.git" }
      ],
      liveUrl: null,
    },
    {
      title: "ArtChallange – Red para Artistas",
      description: "Red social para artistas centrada en retos semanales: creación y edición de obras, participación en desafíos y retroalimentación de la comunidad, con autenticación y perfiles de usuario.",
      techniques: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
      imageUrl: p5,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario-gaes/ArtChallange" },
      ],
      liveUrl: "https://art-challange.web.app/",
    },
    {
      title: "SAI – Agente conversacional para atención de emergencias",
      description: "Agente conversacional para atención de emergencias, desarrollado en el devCodeChallenge 2025: identifica llamadas falsas y prioriza las llamadas reales para optimizar la asignación de recursos de emergencia.",
      techniques: ["Express", "React", "Firebase", "JavaScript", "TwilioAPI", "Python"],
      imageUrl: p8,
      githubUrls: [
        { name: "Repositorio", url: "https://github.com/mario-gaes/ProyectoDevCodeChallange.git" },
      ],
      liveUrl: null,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.proyecto-card');
      const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
      const step = card ? card.clientWidth + gap : 698;
      const scrollAmount = direction === 'left' ? -step : step;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const card = sliderRef.current.querySelector('.proyecto-card');
      const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
      const step = card ? card.clientWidth + gap : 698;
      const index = Math.round(sliderRef.current.scrollLeft / step);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const interactiveClass = (!isMobile && isInteractive) ? 'interactive-element-hovered' : '';

  return (
    <section id="proyectos" className="proyectos-section reveal reveal-proyectos">
      <h2 className="proyectos-title">Proyectos Destacados</h2>

      <div className="proyectos-slider-container">
        {!isMobile && (
          <button
            className="slider-nav-btn prev"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            <FaChevronLeft size={24} />
          </button>
        )}

        <div className="proyectos-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <article
              key={index}
              className={`proyecto-card ${activeIndex === index ? 'active' : 'inactive'} ${interactiveClass}`}
              onMouseEnter={!isMobile ? onMouseEnter : undefined}
              onMouseLeave={!isMobile ? onMouseLeave : undefined}
            >
              <img src={project.imageUrl} alt={project.title} className="proyecto-image" />
              <div className="proyecto-content">
                <h3 className="proyecto-card-title">{project.title}</h3>
                <p className="proyecto-description">{project.description}</p>
                <div className="proyecto-tech-list">
                  {project.techniques.map((tech, techIndex) => (
                    <span key={techIndex} className="proyecto-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="proyecto-links">
                  {project.isPrivate && (
                    <span className="proyecto-link private" aria-label="Proyecto privado, código de cliente">
                      <FaLock size={14} />
                      <span>Proyecto privado (cliente)</span>
                    </span>
                  )}
                  {project.githubUrls.map((repo, repoIndex) => (
                    <a
                      key={repoIndex}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`proyecto-link github ${interactiveClass}`}
                      onMouseEnter={!isMobile ? onMouseEnter : undefined}
                      onMouseLeave={!isMobile ? onMouseLeave : undefined}
                    >
                      <FaGithub size={18} />
                      <span>{repo.name}</span>
                    </a>
                  ))}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`proyecto-link live ${interactiveClass}`}
                      onMouseEnter={!isMobile ? onMouseEnter : undefined}
                      onMouseLeave={!isMobile ? onMouseLeave : undefined}
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!isMobile && (
          <button
            className="slider-nav-btn next"
            onClick={() => scroll('right')}
            aria-label="Siguiente"
          >
            <FaChevronRight size={24} />
          </button>
        )}
      </div>

      <div className="slider-dots">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => {
              if (sliderRef.current) {
                const card = sliderRef.current.querySelector('.proyecto-card');
                const gap = parseInt(window.getComputedStyle(sliderRef.current).gap) || 0;
                const step = card ? card.clientWidth + gap : 698;
                sliderRef.current.scrollTo({ left: index * step, behavior: 'smooth' });
              }
            }}
          />
        ))}
      </div>

      {isMobile && (
        <div className="swipe-hint">
          <FaChevronLeft className="swipe-icon" size={12} />
          <span>Desliza para ver más proyectos</span>
          <FaChevronRight className="swipe-icon" size={12} />
        </div>
      )}
    </section>
  );
};

export default Proyectos;