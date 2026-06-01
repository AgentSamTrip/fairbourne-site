// Piece 1 — AI thesis article. Canonical home.
// Status: ported from "My versionv2.docx" (Jason's draft).
// Architecture detail moved into footnote 4; framework graphic removed; pyramid retained.

import Image from "next/image";

export const metadata = {
  title:
    "AI without your own research is a confident stranger with access to the internet — Fairbourne Capital",
  description: "The case for a knowledge wiki.",
};

export default function AISubstratePage() {
  return (
    <article>
      {/* ============================================================
          HEADER
      ============================================================ */}

      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-navy)] font-medium">
        Fairbourne Capital · 22 May 2026
      </p>

      <h1 className="mt-3 font-serif text-[42px] leading-[1.1] tracking-tight">
        AI without your own research is a confident stranger with access to the internet
      </h1>

      <p className="mt-4 font-serif italic text-xl leading-snug text-[var(--color-muted)]">
        The case for a knowledge wiki.
      </p>

      {/* ============================================================
          OPENER — EY case
      ============================================================ */}

      <div className="mt-12 space-y-6">
        <p>
          Earlier this month EY Canada quietly withdrew a 44-page report on cybersecurity threats in
          loyalty systems, written to market the firm&apos;s services. An external investigation found
          that most of its cited sources were fabricated, misattributed or pointed to pages that did not
          exist — footnotes credited to Forbes, McKinsey, Gartner and others that led nowhere when
          followed.
          <sup id="ref1" className="text-[0.62em] text-[var(--color-navy)] font-medium">
            <a href="#fn1" className="no-underline">1</a>
          </sup>{" "}
          The prose itself was fluent and plausible throughout. A reader could not have known it was AI
          slop, and EY evidently assumed nobody would check for a 44-page report. It was posted last summer, which
          means it has already been absorbed into the training data for the next generation of models —
          the fabrication does not just sit in one withdrawn report, it feeds the thing that will write
          the next one, with no human in the loop to catch it on the way through.
        </p>

        <p>
          The report failed because it was the output of a prompt with access to the internet and no
          research underneath. Asked to sound insightful in a niche where it had no good material, the
          model did the only thing it could and invented some.
        </p>
      </div>

      {/* ============================================================
          SECTION — What LLMs are and are not built for
      ============================================================ */}

      <h2 className="mt-16 font-serif text-2xl leading-tight">
        What LLMs are and are not built for
      </h2>

      <div className="mt-6 space-y-6">
        <p>
          We are reaching for LLMs when judgement is required, even though they were never designed for
          it, because they are efficient. That is sometimes the right call, but it depends on the
          stakes involved. When the cost of being wrong is a withdrawn marketing report, efficient
          wins. When the cost is a capital allocation decision, it does not.
        </p>

        <p>
          When getting it right matters, what matters is whether the work is a task or a job. A task
          has a defined outcome and frequent checkpoints — write the code, run it, see whether it
          passes. The signal is immediate and the model can iterate against it without a human in the
          loop. A job is the opposite end of the same spectrum: it requires a decision before the
          outcome can be known, and the outcome arrives much later, if it resolves cleanly at all.
        </p>

        <p>
          Investment management sits at the far end. The work is deciding under uncertainty on
          incomplete data, where the verdict on today&apos;s call may not be known for years. There are
          few checkpoints and no immediate signals as to which path is better. That is precisely the
          environment in which a model has nothing to iterate against — and precisely where it will,
          asked confidently enough, invent the missing material.
        </p>

        <p>
          Yet most of what is being shipped for the industry today is a thin wrapper on the LLM itself,
          a domain-specific interface and little beneath it. Our chats and agents behave more like
          confident-sounding strangers on the internet than like analysts who can show their work.
        </p>
      </div>

      {/* ============================================================
          SECTION — Whose voice should you weight highest?
      ============================================================ */}

      <h2 className="mt-16 font-serif text-2xl leading-tight">
        Whose voice should you weight highest?
      </h2>

      <div className="mt-6 space-y-6">
        <p>
          Take private credit, where the range of views is wide. The March 2026 market update release
          from Cliffwater — historically a thought leader and the leading index provider in US private
          credit, and a house with a position to defend — stated that performance &ldquo;remains
          in-line with historical averages&rdquo; and that credit health was &ldquo;steady and
          consistent with previous quarters.&rdquo;
          <sup id="ref2" className="text-[0.62em] text-[var(--color-navy)] font-medium">
            <a href="#fn2" className="no-underline">2</a>
          </sup>{" "}
          This at a point in the cycle marked by gated redemptions, NAV markdowns and dividend cuts at
          listed BDCs, at least in the vehicles sold to non-institutional money.
        </p>

        <p>
          Late in a cycle, the industry&apos;s own voices are the ones to discount. But which to weight
          up? Your own prior research, first. Then your team and the people whose judgement you have
          already tested. A model can do the workflow around this — pull the filing, build the
          spreadsheet — but it cannot tell you which source deserves the most weight, or whether the
          analysis is any good. Those are the judgements that compound: what you have read, what you
          found material, whom you decided to trust, and the record of what you weighted how, and
          whether it proved right.
        </p>

        <p>
          That is the asset. It is yours, it cannot be bought off the shelf, and it gets more valuable
          over time. The industry is racing to put each new frontier model on top of the existing
          workflow — faster spreadsheets, sharper pattern-matching, more elaborate signal generation.
          Don&apos;t get me wrong, it&apos;s also very useful. But the check that would have caught the
          fabrication in the EY report is not built into the systems being adopted, and the EY report
          is only the visible version of a failure that is often silent and unnoticed.
        </p>
      </div>

      {/* ============================================================
          SECTION — Using your own knowledge more wisely
          PYRAMID GRAPHIC EMBEDDED HERE
      ============================================================ */}

      <h2 className="mt-16 font-serif text-2xl leading-tight">
        Using your own knowledge more wisely
      </h2>

      <div className="mt-6 space-y-6">
        <p>
          The remedy is not a better prompt. It is to give the model a substrate to stand on: a curated
          body of material you have decided is worth keeping, with a structure on top that says how
          much each piece is worth. Deciding what earns a place in the corpus, and at what level of
          authority per author, is already most of the work — and it is the part that guards against
          invention.
        </p>

        <p>What goes in:</p>

        <ul className="pl-6 list-disc space-y-2 marker:text-[var(--color-navy)]">
          <li>
            <strong>Knowledge</strong> — the verbatim writing of internal and external authors you have
            decided are worth tracking
          </li>
          <li>
            <strong>Past judgements</strong> — your own prior writing, the positions you held, the
            decisions you made
          </li>
          <li>
            <strong>Experience</strong> — team and colleagues&apos; memos, manager DD notes, returned
            DDQs, draft work
          </li>
        </ul>

        <p>
          The model&apos;s job is then to build the connective tissue: the authority tier on every
          page, the citation on every claim, the audit trail back to the original passage.
          <sup id="ref3" className="text-[0.62em] text-[var(--color-navy)] font-medium">
            <a href="#fn3" className="no-underline">3</a>
          </sup>
        </p>
      </div>

      {/* ===== Pyramid graphic — PNG export from knowledge-wiki-chart.html ===== */}
      <figure className="mt-10">
        <Image
          src="/knowledge-wiki-chart.png"
          alt="The knowledge wiki — a tiered substrate. Your writing weights heaviest; trusted authors in their own words; collaborative drafts; LLM output."
          width={1440}
          height={988}
          className="w-full h-auto"
          priority
        />
      </figure>

      <p className="mt-10">
        What you get, when you then ask a question, is inference weighted by authority rather than by
        whatever the internet shouts loudest — and an answer that has to show where each part came
        from.
      </p>

      {/* ============================================================
          SECTION — A note on incentives
      ============================================================ */}

      <h2 className="mt-16 font-serif text-2xl leading-tight">A note on incentives</h2>

      <div className="mt-6 space-y-6">
        <p>
          The economics of producing marketing-grade content have collapsed. The discipline of checking
          it against fabrication, or against data that is simply immaterial, has not kept pace or been
          prioritised.
        </p>

        <p>
          For the foundation model companies, it&apos;s clear why. Building a verifiable substrate
          properly puts a human back in the loop, and that is the bottleneck the model companies are
          least inclined to prize. With hyperscaler capital spending running at roughly $725bn this
          year, the rational move is to ship agents that capture attention and address tasks, not
          workflows.
          <sup id="ref4" className="text-[0.62em] text-[var(--color-navy)] font-medium">
            <a href="#fn4" className="no-underline">4</a>
          </sup>{" "}
          This is understandable. But for investment work it points exactly the wrong way: the most
          valuable asset is not the service, it is your own differentiated substrate.
        </p>

        <p>
          So treat it the way you would treat any compounding asset. Sourcing what you can verify,
          weighting what you can attribute, and tracking down what you still do not know is not a relic
          of a slower era. It is the discipline that keeps your own experience from being drowned out
          by a confident stranger reading the internet.
        </p>
      </div>

      {/* ============================================================
          LINKEDIN DISCUSSION LINK
      ============================================================ */}

      <p className="mt-10 text-sm italic text-[var(--color-muted)]">
        <a
          href="https://www.linkedin.com/posts/jason-triplitt-cfa_privatecredit-investmentmanagement-aiinfinance-share-7463554300737114112-0Mf4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discussion on LinkedIn →
        </a>
      </p>

      {/* ============================================================
          SUBSCRIBE AFFORDANCE
      ============================================================ */}

      <aside className="mt-16 border-t border-[var(--color-rule)] pt-10 text-sm text-[var(--color-muted)] leading-relaxed">
        <p className="font-serif italic">
          Subscribe for new pieces from Fairbourne Capital — long-form on public and private markets,
          from the asset owner&apos;s perspective.{" "}
          <a href="https://jasontriplitt.substack.com" target="_blank" rel="noopener noreferrer">
            Subscribe on Substack →
          </a>
        </p>
      </aside>

      {/* ============================================================
          NOTES
      ============================================================ */}

      <section className="mt-16 pt-6 border-t border-[var(--color-rule)]">
        <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[var(--color-muted)]">
          Notes
        </p>
        <ol className="mt-4 list-decimal pl-6 space-y-3 text-sm text-[var(--color-muted)] leading-relaxed">
          <li id="fn1">
            GPTZero,{" "}
            <a href="https://gptzero.me/investigations/ey" target="_blank" rel="noopener noreferrer">
              <em>Investigation: Hallucinations in Ernst &amp; Young Report on Loyalty Fraud</em>
            </a>
            , 2026. Confirmed by trade press including <em>Computing</em> (UK) and <em>Information Age</em>{" "}
            (Australian Computer Society). EY subsequently withdrew the report and said it was reviewing
            the circumstances of publication.{" "}
            <a href="#ref1" aria-label="back to text" className="no-underline">↩</a>
          </li>
          <li id="fn2">
            Cliffwater,{" "}
            <a
              href="https://www.cliffwater.com/files/docs/CliffwaterPressRelease_CDLI_2025_Results.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Cliffwater Direct Lending Index Data Supports Strength of Private Credit</em>
            </a>
            , market update release, 31 March 2026.{" "}
            <a href="#ref2" aria-label="back to text" className="no-underline">↩</a>
          </li>
          <li id="fn3">
            On the structure underneath, for those who want it. Four things are non-negotiable.{" "}
            <strong>Portable</strong>: the substrate is plain text on a local filesystem, no vendor
            software and no proprietary format. <strong>Model-agnostic</strong>: the model is a service
            in front of the substrate, not its container, so models can be swapped without rebuilding.{" "}
            <strong>Authority-weighted</strong>: every source carries a declared tier, from your own
            writing down to LLM output, and the hierarchy lives in the metadata rather than in
            the model&apos;s inference. <strong>Auditable</strong>: every claim resolves to a named
            passage in a named source, and a claim that cannot resolve is required to say so. In
            practice each source is held as plain text with its metadata and the author&apos;s verbatim
            passages preserved; retrieval is by meaning rather than keyword, so the model finds the
            right passage rather than the right phrase; and sources link to one another, building a
            graph of analytically adjacent material that densifies over time, with older work picking
            up annotations at lower authority than the original — so the corpus becomes its own record
            of which voices were right.{" "}
            <a href="#ref3" aria-label="back to text" className="no-underline">↩</a>
          </li>
          <li id="fn4">
            Big-five hyperscaler capital expenditure for 2026, confirmed at roughly $725bn following
            Q1 2026 earnings, up from the $660–690bn range estimated in February. Goldman Sachs
            Research; reported by Yahoo Finance, May 2026.{" "}
            <a href="#ref4" aria-label="back to text" className="no-underline">↩</a>
          </li>
          <li id="fn5">
            With thanks to Andrej Karpathy, whose April 2026{" "}
            <a
              href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
              target="_blank"
              rel="noopener noreferrer"
            >
              &ldquo;LLM Wiki&rdquo; gist
            </a>{" "}
            articulated the plain-text knowledge-substrate pattern this builds on. The adaptation here —
            authority-weighted retrieval, verbatim preservation, the audit trail — is the asset
            owner&apos;s.
          </li>
        </ol>
      </section>
    </article>
  );
}
