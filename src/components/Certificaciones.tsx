// Certificaciones.tsx
import { type FunctionComponent } from "react";
import "./Certificaciones.css";
import { SiUdemy, SiGooglecloud, SiPlatzi } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";
import metaphorceLogo from "../assets/metaphorce-logo.png";

interface CertificacionesProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isInteractive: boolean;
  isMobile: boolean;
}

interface Certification {
  title: string;
  issuer: string;
  icon?: IconType;
  logoImage?: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Microservicios desde Cero con NestJs, TypeScript, RabbitMQ, Docker, JWT, Passport, Guard, Swagger, AWS, Mongoose y más!",
    issuer: "Udemy",
    icon: SiUdemy,
    date: "Marzo 2025",
    credentialId: "UC-adc65e63-dbf8-49b6-9a53-4567ea9046f4",
    credentialUrl: "https://www.udemy.com/certificate/UC-adc65e63-dbf8-49b6-9a53-4567ea9046f4/",
  },
  {
    title: "Inteligencia Artificial y Deep Learning desde cero en Python",
    issuer: "Udemy",
    icon: SiUdemy,
    date: "Mayo 2026",
    credentialId: "UC-9ce8d1d8-381a-4058-876d-8b023af5b6b6",
    credentialUrl: "https://www.udemy.com/certificate/UC-9ce8d1d8-381a-4058-876d-8b023af5b6b6/",
  },
  {
    title: "Aspectos básicos de la computación en Google Cloud: Fundamentos de la computación en la nube",
    issuer: "Google",
    icon: SiGooglecloud,
    date: "Noviembre 2024",
    credentialId: "12646746",
    credentialUrl: "https://www.skills.google/public_profiles/00c7da40-34e2-430b-a328-6a1c59073ac8/badges/12646746",
  },
  {
    title: "Aspectos básicos de la computación en Google Cloud: Infraestructura en Google Cloud",
    issuer: "Google",
    icon: SiGooglecloud,
    date: "Noviembre 2024",
    credentialId: "12822396",
    credentialUrl: "https://www.skills.google/public_profiles/00c7da40-34e2-430b-a328-6a1c59073ac8/badges/12822396",
  },
  {
    title: "Aspectos básicos de la computación en Google Cloud: Redes y seguridad en Google Cloud",
    issuer: "Google",
    icon: SiGooglecloud,
    date: "Noviembre 2024",
    credentialId: "12998185",
    credentialUrl: "https://www.skills.google/public_profiles/00c7da40-34e2-430b-a328-6a1c59073ac8/badges/12998185",
  },
  {
    title: "Aspectos básicos de la computación en Google Cloud: Datos, IA y AA en Google Cloud",
    issuer: "Google",
    icon: SiGooglecloud,
    date: "Noviembre 2024",
    credentialId: "13054475",
    credentialUrl: "https://www.skills.google/public_profiles/00c7da40-34e2-430b-a328-6a1c59073ac8/badges/13054475",
  },
  {
    title: "Implementa Cloud Load Balancing para Compute Engine",
    issuer: "Google",
    icon: SiGooglecloud,
    date: "Diciembre 2024",
    credentialId: "13239431",
    credentialUrl: "https://www.skills.google/public_profiles/00c7da40-34e2-430b-a328-6a1c59073ac8/badges/13239431",
  },
  {
    title: "Configura un entorno de desarrollo de apps en Google Cloud",
    issuer: "Google",
    icon: SiGooglecloud,
    date: "Diciembre 2024",
    credentialId: "13347477",
    credentialUrl: "https://www.skills.google/public_profiles/00c7da40-34e2-430b-a328-6a1c59073ac8/badges/13347477",
  },
  {
    title: "Curso Profesional de React.js y Redux",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2025",
    credentialId: "62ba4e9e-067c-4161-916e-0a63dd1315c7",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/3219-course/diploma/detalle/",
  },
  {
    title: "Curso de React.js: Manejo Profesional del Estado",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2025",
    credentialId: "651cab66-5f80-47c2-9957-69d65d8d5a84",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/2597-course/diploma/detalle/",
  },
  {
    title: "Curso de Estructuras de Datos con JavaScript",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2024",
    credentialId: "051a1a8e-3fc6-4165-84fd-6aaada42af23",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/2156-course/diploma/detalle/",
  },
  {
    title: "Curso de Clean Code y Buenas Prácticas con JavaScript",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2024",
    credentialId: "7987528f-7c2f-4b21-a70a-b79fdb5ae451",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/6240-course/diploma/detalle/",
  },
  {
    title: "Curso de Backend con Node.js: API REST con Express.js",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Noviembre 2024",
    credentialId: "d9aca5a8-c669-4088-a2c5-2784c9581a1b",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/2485-course/diploma/detalle/",
  },
  {
    title: "Curso de Backend con Node.js: Base de Datos con PostgreSQL",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2025",
    credentialId: "b80b70b8-55e9-4c6b-b361-b458198fa306",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/2507-course/diploma/detalle/",
  },
  {
    title: "Curso de GitHub Actions",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Abril 2025",
    credentialId: "6b1e83cd-bd5b-42db-aec9-8689c69c9d52",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/7992-course/diploma/detalle/",
  },
  {
    title: "Curso de Backend con Node.js: Autenticación con Passport.js y JWT",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2025",
    credentialId: "1037ea77-62d7-4292-b006-634d66a58c93",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/2489-passport/diploma/detalle/",
  },
  {
    title: "Frontend con React.js",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Noviembre 2024",
    credentialId: "83faaff2-e55d-4f75-b443-e3caf042bc47",
    credentialUrl: "https://platzi.com/p/mariogaes03/ruta/7043-web-react/diploma/detalle/",
  },
  {
    title: "Curso de Backend con Node.js: Base de Datos con PostgreSQL",
    issuer: "Platzi",
    icon: SiPlatzi,
    date: "Enero 2025",
    credentialId: "5644fceb-3b83-4357-a0a9-15b7b3032741",
    credentialUrl: "https://platzi.com/p/mariogaes03/curso/2507-backend-nodejs-postgres/diploma/detalle/",
  },
  {
    title: "Primera Edición DuranIA del Summer AI Programming BootCamp",
    issuer: "Metaphorce",
    logoImage: metaphorceLogo,
    date: "Julio 2026",
    credentialId: "Hih7bTWrFv2StcGrvWWCOxGwBGox6z7IGKbbJ0ziaXU",
    credentialUrl: "https://metaphorce.mx/es/certificates/verify/Hih7bTWrFv2StcGrvWWCOxGwBGox6z7IGKbbJ0ziaXU",
  },
];

const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const parseCertDate = (date: string): number => {
  const [month, year] = date.toLowerCase().split(" ");
  return new Date(Number(year), MONTHS.indexOf(month)).getTime();
};

const sortedCertifications = [...certifications].sort(
  (a, b) => parseCertDate(b.date) - parseCertDate(a.date)
);

const Certificaciones: FunctionComponent<CertificacionesProps> = ({ onMouseEnter, onMouseLeave, isInteractive, isMobile }) => {
  const interactiveClass = (!isMobile && isInteractive) ? 'interactive-element-hovered' : '';

  return (
    <section id="certificaciones" className="certificaciones-section reveal reveal-certificaciones">
      <h2 className="certificaciones-title">Certificaciones y Cursos</h2>
      <div className="certificaciones-grid">
        {sortedCertifications.map((cert) => (
          <div
            key={cert.credentialId}
            className={`certificacion-card ${interactiveClass}`}
            onMouseEnter={!isMobile ? onMouseEnter : undefined}
            onMouseLeave={!isMobile ? onMouseLeave : undefined}
          >
            {cert.logoImage ? (
              <img src={cert.logoImage} alt={`${cert.issuer} logo`} className="certificacion-icon certificacion-logo-img" />
            ) : (
              cert.icon && <cert.icon className="certificacion-icon" size={32} />
            )}
            <div className="certificacion-content">
              <h3 className="certificacion-card-title">{cert.title}</h3>
              <p className="certificacion-meta">
                <span className="certificacion-issuer">{cert.issuer}</span>
                <span className="certificacion-dot">•</span>
                <span className="certificacion-date">{cert.date}</span>
              </p>
              <p className="certificacion-id">ID: {cert.credentialId}</p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`certificacion-link ${interactiveClass}`}
                onMouseEnter={!isMobile ? onMouseEnter : undefined}
                onMouseLeave={!isMobile ? onMouseLeave : undefined}
              >
                <span>Ver credencial</span>
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificaciones;
