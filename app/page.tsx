/**
 * TRON-Inspired Personal Website
 * ================================
 * Design: Minimalist, technical, future-facing
 * Aesthetic: "Systems engineer inside a futuristic research lab"
 * 
 * Sections:
 * 1. Hero - Name, subtitle, tagline
 * 2. What I'm Working On - Technical bullet points
 * 3. Selected Work - Key projects
 * 4. How I Think - First principles statements
 * 5. Footer - Contact
 */

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 max-w-5xl mx-auto">
        {/* Subtle top accent line */}
        <div className="w-12 h-px bg-tron-cyan mb-8 opacity-60" />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-tron-text mb-4 tracking-tight">
          Ayush Jangid
        </h1>

        <p className="text-lg md:text-xl text-tron-cyan font-mono mb-6">
          Independent Systems Builder
        </p>

        <p className="text-tron-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
          Focused on building and stress-testing real systems under constraints.
        </p>

      </section>

      {/* Divider */}
      <div className="tron-divider mx-6 md:mx-12 lg:mx-24" />

      {/* ===== BUILDING ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-5xl mx-auto">
        <h2 className="section-header text-xl md:text-2xl font-medium text-tron-text mb-8">
          Building
        </h2>

        <div className="space-y-4">
          <RepoLink
            href="https://github.com/AJ-EN/medpredict-AI"
            name="MedPredict AI"
            description="Clinical risk prediction with multi-modal fusion"
          />
          <RepoLink
            href="https://github.com/AJ-EN/mockmate"
            name="mockmate"
            description="AI-powered interview practice system"
          />
          <RepoLink
            href="https://github.com/AJ-EN/AI-Prosthetic-Optimizer-YUVAi2025"
            name="AI-Prosthetic-Optimizer"
            description="Prosthetic control optimization using ML"
          />
        </div>
      </section>

      {/* Divider */}
      <div className="tron-divider mx-6 md:mx-12 lg:mx-24" />

      {/* ===== HOW I THINK ===== */}
      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-5xl mx-auto">
        <h2 className="section-header text-xl md:text-2xl font-medium text-tron-text mb-10">
          How I Think
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ThinkingCard>
            <span className="text-tron-cyan font-mono text-sm">01</span>
            <p className="mt-3 text-tron-text-secondary">
              Start from first principles. Most failures trace back to
              unexamined assumptions.
            </p>
          </ThinkingCard>

          <ThinkingCard>
            <span className="text-tron-cyan font-mono text-sm">02</span>
            <p className="mt-3 text-tron-text-secondary">
              Constraints are features. They reveal what actually matters.
            </p>
          </ThinkingCard>

          <ThinkingCard>
            <span className="text-tron-cyan font-mono text-sm">03</span>
            <p className="mt-3 text-tron-text-secondary">
              Build for the failure case. Ship, measure, iterate.
            </p>
          </ThinkingCard>
        </div>
      </section>

      {/* Divider */}
      <div className="tron-divider mx-6 md:mx-12 lg:mx-24" />

      {/* ===== FOOTER ===== */}
      <footer className="px-6 md:px-12 lg:px-24 py-16 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-tron-text-secondary mb-3">Get in touch</p>
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a
                href="https://x.com/Ayush_observer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tron-text-secondary hover:text-tron-cyan transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/AJ-EN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tron-text-secondary hover:text-tron-cyan transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-tron-text-muted text-sm font-mono">
            © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </main>
  );
}

/**
 * ThinkingCard Component
 * Numbered principle card
 */
function ThinkingCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border-l border-tron-grid hover:border-tron-cyan/40 transition-colors duration-300">
      {children}
    </div>
  );
}

/**
 * RepoLink Component
 * GitHub repo link with icon
 */
function RepoLink({ href, name, description }: { href: string; name: string; description: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 group"
    >
      {/* GitHub icon */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-tron-text-muted group-hover:text-tron-cyan transition-colors duration-200 mt-0.5 flex-shrink-0"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      <div>
        <span className="text-tron-text font-mono text-sm group-hover:text-tron-cyan transition-colors duration-200">
          {name}
        </span>
        <p className="text-tron-text-muted text-sm mt-0.5">
          {description}
        </p>
      </div>
    </a>
  );
}
