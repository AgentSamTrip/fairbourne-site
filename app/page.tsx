export default function HomePage() {
  return (
    <article>
      <h1 className="font-serif text-5xl leading-tight tracking-tight">Fairbourne Capital</h1>
      <p className="mt-3 text-lg text-[var(--color-muted)]">A private investment office.</p>

      <div className="mt-12 space-y-6 text-[var(--color-ink)]">
        <p>
          Jason Triplitt, CFA. Two decades stewarding institutional capital at GIC — as Head of a
          $10bn+ pan-European public and private growth equity strategy and member of the firm's
          global leadership committee. Since 2019, Fairbourne Capital has been the vehicle for
          selective investing, independent research, and senior advisory work across public
          equities, private equity, and private credit.
        </p>
        <p>
          Writing on public and private markets from the asset owner's perspective. Open to
          conversations with asset owners, family offices, wealth managers, and boards seeking an
          independent, senior perspective.
        </p>
      </div>

      <p className="mt-12">
        <a href="mailto:jason.triplitt@fairbournecapital.com">jason.triplitt@fairbournecapital.com</a>
      </p>
    </article>
  );
}
