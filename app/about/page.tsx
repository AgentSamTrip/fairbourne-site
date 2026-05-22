export const metadata = {
  title: "About — Fairbourne Capital",
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="font-serif text-4xl leading-tight tracking-tight">Jason Triplitt, CFA</h1>

      <div className="mt-10 space-y-6 text-[var(--color-ink)]">
        <p>
          Two decades stewarding institutional capital at one of the world's largest sovereign
          wealth funds.
        </p>
        <p>
          At GIC, I spent 17.5 years as Head of European Equities — responsible for portfolio
          construction and direct investment across GIC's $10bn+ pan-European public and private
          growth equity strategy. From 2012, I held a concurrent role as Managing Director, serving
          on GIC's c. 35-person Managing Committee with responsibility for setting investment
          policy across public and alternative private market strategies and for the firm's
          strategic direction.
        </p>
        <p>
          Since leaving GIC in late 2018, I have run Fairbourne Capital as my investment office —
          focused on selective investing across public and private markets, independent research,
          and senior advisory work.
        </p>

        <div>
          <p>Selected advisory roles since 2019:</p>
          <ul className="mt-4 space-y-3 pl-0">
            <li>
              <span className="font-medium">Beyond Imagination Inc.</span> — Non-Executive Advisor
              (Jun 2024 – Jul 2025). US-based AI operating system for humanoids. Focus: investor
              engagement.
            </li>
            <li>
              <span className="font-medium">The Growth Stage</span> — Senior Advisor (Apr 2023 –
              Jun 2024). Platform connecting institutional and private wealth capital with private
              companies and alternative managers.
            </li>
            <li>
              <span className="font-medium">OakNorth Analytical Intelligence</span> — Non-Executive
              Advisor (Feb 2019 – Dec 2021). Credit analytics and SME lending technology platform.
            </li>
          </ul>
        </div>

        <p>
          I hold the CFA Charter and a BSc in Business Administration from San Diego State
          University.
        </p>
      </div>
    </article>
  );
}
