import React from "react";
import { createRoot } from "react-dom/client";

const data = {
  name: "Priscilla Pak",
  headline: "Computational Aerospace Engineer — hypersonics, CFD, combustion",
  blurb:
    "Selected projects spanning hypersonic meshing/flow modeling, adjoint-based aero optimization, and combustion kinetics + DNS workflows.",
  location: "America/New_York",
  focus: "Hypersonics • CFD • Meshing • Combustion modeling • HPC",
  links: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://www.linkedin.com/in/YOUR_HANDLE",
    resume: "./resume.pdf",
    email: "mailto:you@example.com"
  },
  skills: [
    "Python",
    "CFD",
    "Hypersonics (aerothermal)",
    "Unstructured meshing",
    "Pointwise",
    "Kestrel (workflow)",
    "OpenFOAM",
    "DAFoam (adjoint)",
    "Combustion kinetics (Cantera)",
    "DNS workflow (NGA)",
    "HPC (Stampede2)"
  ],
  projects: [
    {
      title: "NH3/H2 Blend Combustion: Kinetics Validation + DNS Convergence",
      description:
        "Validated a 32-species/165-reaction kinetics mechanism in Cantera and analyzed laminar flame speeds for NH3/H2-air mixtures (incl. stretch effects and radiation sensitivity). Ran a spatial convergence study for a laminar premixed flame DNS workflow using NGA.",
      href: "./assets/ammonia-h2-flames.pdf",
      tags: ["Cantera", "Combustion", "DNS", "NGA", "Python"]
    },
    {
      title: "Unstructured Meshing Best Practices for Hypersonic CFD (Internship Project)",
      description:
        "Designed a parametric study to quantify how unstructured mesh choices impact hypersonic flow accuracy: cell density, quad vs tet, voxel vs traditional unstructured grids, and alignment/shock fitting across equilibrium and nonequilibrium regimes.",
      href: "./assets/hypersonic-meshing-parametric-study-brief.pdf",
      tags: ["Pointwise", "Meshing", "Hypersonics", "Kestrel"]
    },
    {
      title: "Hypersonic Flow Modeling with Unstructured Grids (Mach 21 cone-sphere)",
      description:
        "Built rapid unstructured-grid configurations for re-entry-type flows: prismatic/hexahedral boundary-layer extrusion near-body with tetra/hex farfield to resolve bow shock and wake. Compared tet vs prism/hex tradeoffs in boundary-layer resolution and mesh generation cost.",
      href: "./assets/hypersonic-unstructured-grids-poster.pdf",
      tags: ["Hypersonics", "Unstructured grids", "Boundary layer", "Wake"]
    },
    {
      title: "UAV Wing Aerodynamic Optimization with Planform Variables",
      description:
        "Used DAFoam (discrete adjoint + OpenFOAM) with pyOptSparse/pyGeo/pyWarp to test whether adding planform variables to shape-only optimization changes optimized drag. Ran HPC cases on Stampede2 (multi-node, hundreds of tasks per case).",
      href: "./assets/uav-wing-opt-poster.pdf",
      tags: ["DAFoam", "OpenFOAM", "Adjoint", "Optimization", "HPC"]
    },
    {
      title: "LES Building/Urban Flow Model (setup notes)",
      description:
        "Set up an LES test domain with discretized topography, constant grid spacing, and experimental reference conditions (Re ~4.3e4). Prepared roughness inputs for precursor simulations and documented key nondimensional parameters.",
      href: "./assets/les-building-model-notes.pdf",
      tags: ["LES", "Turbulence", "Domain setup", "Validation"]
    }
  ]
};

function Icon({ label }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: 999,
        background: "rgba(231,237,246,0.35)",
        boxShadow: "0 0 0 3px rgba(231,237,246,0.08)"
      }}
      title={label}
    />
  );
}

function App() {
  return (
    <>
      <div className="nav">
        <div className="container navInner">
          <div className="brand">
            <span className="dot" />
            <span>{data.name}</span>
          </div>
          <div className="navLinks">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href={data.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <header className="hero">
        <div className="container heroGrid">
          <div className="card cardPad">
            <h1 className="h1">{data.headline}</h1>
            <p className="sub">{data.blurb}</p>

            <div className="pills" aria-label="Skills">
              {data.skills.map((s) => (
                <span className="pill" key={s}>
                  {s}
                </span>
              ))}
            </div>

            <div className="ctaRow">
              <a className="btn btnPrimary" href={data.links.github} target="_blank" rel="noreferrer">
                <Icon label="dot" /> GitHub
              </a>
              <a className="btn" href={data.links.linkedin} target="_blank" rel="noreferrer">
                <Icon label="dot" /> LinkedIn
              </a>
              <a className="btn" href={data.links.resume}>
                <Icon label="dot" /> Resume
              </a>
              <a className="btn" href={data.links.email}>
                <Icon label="dot" /> Email
              </a>
            </div>
          </div>

          <aside className="card cardPad">
            <div className="kv">
              <div className="kvItem">
                <div className="kvK">Location / time</div>
                <div className="kvV">{data.location}</div>
              </div>
              <div className="kvItem">
                <div className="kvK">Focus</div>
                <div className="kvV">{data.focus}</div>
              </div>
              <div className="kvItem">
                <div className="kvK">Notes</div>
                <div className="kvV">
                  Built as a static React page (no npm). Deploys cleanly to GitHub Pages.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main className="container">
        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2 className="h2">Projects</h2>
            <div className="small">Replace placeholders with real repos + outcomes.</div>
          </div>

          <div className="grid">
            {data.projects.map((p) => (
              <a className="card project" href={p.href} key={p.title}>
                <h3 className="projectTitle">{p.title}</h3>
                <p className="projectMeta">{p.description}</p>
                <div className="tags" aria-label="Project tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="sectionHeader">
            <h2 className="h2">About</h2>
            <div className="small">2–4 tight sentences works better than a wall of text.</div>
          </div>
          <div className="card cardPad">
            <p className="sub" style={{ marginTop: 0 }}>
              I work on computational aerospace problems spanning hypersonic aerothermal flows, unstructured meshing
              strategies, and combustion/kinetics workflows. I like clear assumptions, validation where possible, and
              tooling that makes iteration cheap.
            </p>
            <p className="sub">
              This page is intentionally minimal: high-signal project cards, links, and fast loading on GitHub Pages.
            </p>
          </div>
        </section>

        <div className="footer">
          <div>© {new Date().getFullYear()} {data.name}. Built with React.</div>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
