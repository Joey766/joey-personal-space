import "./ambient-particles.css";
import "./ambient-stars-enhancement.css";

export function AmbientParticles({ variant = "default" }: { variant?: "career" | "explore" | "work" | "projects" | "life" | "default" }) {
  return <div className={`ambient-particles ambient-particles--${variant}`} aria-hidden="true">
    <div className="ambient-particles__stars">{Array.from({ length: 22 }, (_, index) => <i key={index} />)}</div>
    <div className="ambient-particles__dust">{Array.from({ length: 10 }, (_, index) => <i key={index} />)}</div>
    <span className="ambient-particles__meteor" />
    <span className="ambient-particles__meteor ambient-particles__meteor--secondary" />
  </div>;
}
