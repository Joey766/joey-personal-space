import { AmbientParticles } from "./AmbientParticles";
import "./ambient-background.css";
import "./ambient-system.css";

type AmbientVariant = "career" | "explore" | "work" | "projects" | "life";

export function AmbientBackground({ variant }: { variant: AmbientVariant }) {
  return <div className={`ambient-background ambient-background--${variant}`} aria-hidden="true">
    <div className="ambient-background__aurora" />
    <div className="ambient-background__mist" />
    <AmbientParticles variant={variant} />
  </div>;
}
