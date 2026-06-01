import Link from "next/link";

export const metadata = {
  title: "Research — Fairbourne Capital",
};

// =============================================================================
// CONTENT — long-form essays published on this site
// =============================================================================

const essays = [
  {
    slug: "ai-substrate",
    title: "AI without your own research is a confident stranger with access to the internet",
    dek: "The case for a knowledge wiki.",
    date: "22 May 2026",
  },
  {
    slug: "wework-exception",
    title: "WeWork Was the Exception, Not the New Rule",
    dek: "The staying-private-for-longer thesis, written in the days after WeWork's failed IPO. Republished from October 2019.",
    date: "October 2019",
  },
];

// =============================================================================
// CONTENT — shorter pieces published on LinkedIn (link-out)
//
// Each item links externally to LinkedIn. Replace the placeholder entries with
// the real ones — title, date (Month Year), and the LinkedIn URL.
// =============================================================================

const notes: Array<{ title: string; date: string; href: string }> = [
  {
    title: "Private credit's asset-gathering business exposed",
    date: "April 2026",
    href: "https://www.linkedin.com/posts/jason-triplitt-cfa_privatecredit-bdc-alternativeinvestments-activity-7443222186561142784-9gt9",
  },
  {
    title: "AI market correction: is the ground shifting?",
    date: "February 2026",
    href: "https://www.linkedin.com/posts/jason-triplitt-cfa_ai-innovation-markets-activity-7426621665964421123-UsSa",
  },
  {
    title: "AI is eating software — plus more equity and debt positions than you imagine",
    date: "January 2026",
    href: "https://www.linkedin.com/posts/jason-triplitt-cfa_ai-is-eating-softwareplus-more-equity-activity-7422294658224910336-h4jK",
  },
];

// =============================================================================

export default function ResearchPage() {
  return (
    <article>
      <h1 className="font-serif text-4xl leading-tight tracking-tight">Research</h1>
      <p className="mt-3 text-lg text-[var(--color-muted)]">
        Independent analysis on public and private markets, from the asset owner&apos;s perspective.
      </p>

      {/* ============================================================
          ESSAYS — long-form work on this site
      ============================================================ */}

      <section className="mt-16">
        <h2 className="text-xs uppercase tracking-[0.22em] font-semibold text-[var(--color-navy)]">
          Essays
        </h2>

        <ul className="mt-6 space-y-10 list-none pl-0">
          {essays.map((p) => (
            <li key={p.slug}>
              <Link href={`/research/${p.slug}`} className="no-underline group">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] font-medium">
                  {p.date}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-[var(--color-ink)] group-hover:text-[var(--color-navy)] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 font-serif italic text-[var(--color-muted)]">{p.dek}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ============================================================
          NOTES — shorter pieces (link-out to LinkedIn)
      ============================================================ */}

      {notes.length > 0 && (
        <section className="mt-20 border-t border-[var(--color-rule)] pt-12">
          <h2 className="text-xs uppercase tracking-[0.22em] font-semibold text-[var(--color-navy)]">
            Notes
          </h2>

          <ul className="mt-6 list-none pl-0 divide-y divide-[var(--color-rule)] border-t border-b border-[var(--color-rule)]">
            {notes.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline group grid grid-cols-[110px_1fr_24px] gap-4 py-4 items-baseline"
                >
                  <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] font-medium">
                    {p.date}
                  </span>
                  <span className="font-serif text-base leading-snug text-[var(--color-ink)] group-hover:text-[var(--color-navy)] transition-colors">
                    {p.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-xs text-[var(--color-muted)] group-hover:text-[var(--color-navy)] transition-colors justify-self-end"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-[var(--color-muted)] italic">
            Published on LinkedIn — opens in a new tab.
          </p>
        </section>
      )}

      {/* ============================================================
          SUBSCRIBE
      ============================================================ */}

      <aside className="mt-20 border-t border-[var(--color-rule)] pt-10 text-sm text-[var(--color-muted)] leading-relaxed">
        <p className="font-serif italic">
          New pieces delivered by email.{" "}
          <a href="https://jasontriplitt.substack.com" target="_blank" rel="noopener noreferrer">
            Subscribe on Substack →
          </a>
        </p>
      </aside>
    </article>
  );
}
