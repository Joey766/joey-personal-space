import "./ambient-particles.css";

export function AmbientParticles({ variant = "default" }: { variant?: "career" | "explore" | "work" | "projects" | "life" | "default" }) {
  return <div className={`ambient-particles ambient-particles--${variant}`} aria-hidden="true">
    <div className="ambient-particles__stars">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
    <div className="ambient-particles__dust">{Array.from({ length: 6 }, (_, index) => <i key={index} />)}</div>
    <span className="ambient-particles__meteor" />
  </div>;
}
