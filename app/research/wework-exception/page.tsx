// Piece 2 — WeWork piece, republished from October 2019.
// 2019 original prose preserved verbatim. A 2026 looking-back header sits
// between the title and body; charts are the originals, copied from the old
// Squarespace page into /public.

import Image from "next/image";

export const metadata = {
  title: "WeWork Was the Exception, Not the New Rule — Fairbourne Capital",
  description:
    "The staying-private-for-longer thesis from October 2019. Why WeWork's failed IPO did not reverse the trend.",
};

export default function WeWorkExceptionPage() {
  return (
    <article>
      {/* ============================================================
          HEADER
      ============================================================ */}

      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-navy)] font-medium">
        Fairbourne Capital · October 2019
      </p>

      <h1 className="mt-3 font-serif text-[42px] leading-[1.1] tracking-tight">
        WeWork Was the Exception, Not the New Rule
      </h1>

      {/* ============================================================
          2026 LOOKING-BACK HEADER
      ============================================================ */}

      <aside className="mt-8 border-l-2 border-[var(--color-navy)] pl-5 py-1 text-base font-serif italic text-[var(--color-muted)] leading-snug">
        Looking back from 2026: six years on, the trend the piece called has not reversed — it has
        scaled. SpaceX is approaching an IPO at close to $2 trillion, an order of magnitude above
        the valuations WeWork&apos;s bankers ever contemplated. The mid- and small-cap discount in
        public markets has widened, not narrowed. Republished here in original 2019 form.
      </aside>

      {/* ============================================================
          BODY — 2019 prose, verbatim
      ============================================================ */}

      <div className="mt-12 space-y-6">
        <p>
          In a twist of fate, it was an 86-year-old US law that ultimately destroyed the value of
          one of the quickest start-ups in history to reach nearly a $100 billion dollar valuation —
          WeWork. The law was the requirement in the US for firms looking to IPO to file an S-1, or
          prospectus, which reveals details of the financial results and operations of a firm. The
          statement by Softbank this week that it was throwing WeWork a lifeline post the recent
          failed IPO was a victory for the public market investors as the underlying fundamentals
          of WeWork didn&apos;t match a $100 billion dollar company.
        </p>

        <p>
          <strong>
            However, this is not the end of the staying private for longer until a jumbo IPO trend
          </strong>{" "}
          with WeWork following in the footsteps of Uber, Slack, Pinterest, etc.
        </p>

        <p>
          Long gone are the days when firms would follow Amazon IPO&apos;ing at a &lt;$1 billion
          valuation in order to obtain the capital to grow, providing savers and pension funds with
          the outsized returns of successful real innovators. There will be a company staying
          private long enough to achieve a $100 billion equity valuation at IPO before the end of
          this cycle. Amazon has ultimately delivered returns of 2,250x since the 1997 IPO, but if
          they would have waited as Facebook and others did, the returns investors would have
          achieved would have been closer to 10x. Still a good return, but it&apos;s a long way
          from 2,250x and is an indication that a small group of private market investors are
          creaming the best returns.
        </p>
      </div>

      {/* ===== Chart 1 — IPO ages and market caps ===== */}
      <figure className="mt-10">
        <Image
          src="/wework-chart-ipo-ages.png"
          alt="Age before IPO and market cap at IPO for Amazon (founded 1994, IPO 1997, age 3, $652m), Google (founded 1998, IPO 2004, age 6, $29,741m), and Facebook (founded 2004, IPO 2012, age 8, $110,575m)."
          width={1890}
          height={634}
          className="w-full h-auto"
        />
      </figure>

      <div className="mt-10 space-y-6">
        <p>
          In one way WeWork was following the strategy of Amazon that if one industry player
          attracts the most capital and its valuation gets large enough, this low cost of capital
          can ensure that there won&apos;t be enough oxygen left in the room for anyone else to
          survive much less grow. The &ldquo;de-oxygenation&rdquo; strategy is now tried and tested
          to great effect when regulators are asleep at the wheel and is driving valuations far
          more than EBITDA or profits for several industries, and not just tech. The decline in
          anti-trust enforcement and rise in industry concentration is quite broad based in the US.
          Think of not just WeWork or Amazon, but Uber, Apple, Anheuser-Busch, airlines, Google,
          Facebook… their valuations have helped them grow fast and acquire potential competitors
          and it&apos;s a reason so few companies have managed to be so important in our daily
          lives.
        </p>

        <p>
          <strong>
            The de-regulation of private markets has completely broken the trade-off between going
            public to get access to large pools of capital and staying private.
          </strong>{" "}
          The historically lower cost of capital achieved by public companies in exchange for
          meeting regulatory and disclosure requirements has been flipped on its head by the
          migration of capital towards private markets. Public companies now run the risk of facing
          a higher cost of capital than their private counterparts.
        </p>

        <p>
          Beyond de-regulation, low cost passive funds and ETFs has resulted in the creation of a
          &ldquo;risk free&rdquo; equity asset class where capital allocations are referenced to
          recognised benchmarks by trustees doing their fiduciary duty. Significant pools of
          capital are now investing parts of their equity risk allocations into privates, private
          equity funds, VC funds, private debt, infrastructure, thematic ETF tilts, etc. instead of
          actively managed public equity funds. Institutional investors have alternatives and they
          are using them in droves.
        </p>
      </div>

      {/* ===== Chart 2 — Alternatives allocation ===== */}
      <figure className="mt-10">
        <Image
          src="/wework-chart-alternatives.png"
          alt="US alternative assets under management by asset class (Private Equity, Real Estate, Infrastructure, Private Debt, Natural Resources), 2000 to 2018, rising from roughly $500bn to over $3,000bn. Source: Preqin."
          width={1200}
          height={500}
          className="w-full h-auto"
        />
      </figure>

      <div className="mt-10 space-y-6">
        <p>
          <strong>
            What is remaining in the public markets is largely a risk free equity allocation which
            needs to be liquid, very liquid, to perform its function as an equity exposure parking
            place until more interesting opportunities appear, consigning many mid-cap and
            small-cap firms to a much smaller pool of potential investors with valuations well
            below their intrinsic value.
          </strong>
        </p>

        <p>
          While the PE and other alternative funds get paid well to invest capital into illiquid
          assets, the lack of liquidity in large parts of the public markets and the decline of
          active institutional stock pickers has made many public equities almost un-investible to
          the remaining funds. At one point, I was quite hopeful that the bifurcation of markets
          into passive and private equity would have led to great opportunities for bottoms-up long
          term stock picking, but the momentum in performance required to maintain assets in a fund
          doesn&apos;t lend itself to holding an equity regardless of the valuation if it&apos;s
          remotely controversial or out of fashion. After just 8 months, the stock-picker and
          former Fidelity Magellan star fund manager Jeff Vinik closed his new fund this week as
          according to MSNBC, &ldquo;investors told him that style doesn&apos;t work anymore&rdquo;.
        </p>

        <p>
          The illiquidity problem has become far more acute in Europe than the US. A recent study
          by Morgan Stanley has found that when defining liquidity as any equity that trades more
          than $100mio a day, European equities have fallen from 32% of global equity liquidity in
          2006 to just 11% in 2018. Not only does the US and Asia have the equities of larger
          global champions such as Apple or Google, but the lack of IPOs and illiquidity only
          begets more illiquidity in Europe. European regulators should take note that a pillar of
          capital markets in Europe is in danger of being globally marginalised.
        </p>

        <p>
          <strong>
            Many firms are not asking themselves why risk going public with the associated costs,
            regulatory hurdles and transparency requirements when there are large pools of private
            market capital available? Or the flipside, why do we keep the firm listed when the
            valuation doesn&apos;t reflect the value of the business?
          </strong>
        </p>

        <p>
          As a reflection of this, in less than 20 years the average age of listed companies in
          the US has risen significantly and the total number of publicly listed firms is down by
          50% all the while the number of private firms held by private equity firms has rocketed.
        </p>
      </div>

      {/* ===== Chart 3 — PE-owned firms vs public firms ===== */}
      <figure className="mt-10">
        <Image
          src="/wework-chart-pe-vs-public.png"
          alt="Number of US PE-backed companies versus public companies, 1991 to 2018. Public companies fall from ~7,500 in 1996 to ~4,200 in 2018. PE-backed companies rise from near zero in 1991 to ~7,800 in 2018, overtaking public companies around 2006."
          width={1200}
          height={1000}
          className="w-full h-auto max-w-[520px] mx-auto block"
        />
        <figcaption className="mt-2 text-xs italic text-[var(--color-muted)] text-center">
          Source: World Federation of Exchanges, Federal Reserve, SEC, Thomson Reuters Eikon, Milken
          Institute; March 2018. Public domestic companies, excluding investment trusts.
        </figcaption>
      </figure>

      <div className="mt-10 space-y-6">
        <p>
          Without the short-term investment horizon of public markets to worry about and access to
          low cost capital, many firms are staying private longer, concentrating the wealth
          creation of equities in growing alternative investment funds that can charge large fees
          before the equities become publicly investible.
        </p>

        <p>
          <strong>
            Stylistically, the equity market landscape now has an under belly of undervalued and
            underrepresented firms, but the WeWork debacle is an exception to the stay-private-for-
            longer trend and unlikely to decrease the discounts to intrinsic value for mid and
            small cap publicly listed equities for the foreseeable future.
          </strong>
        </p>
      </div>

      {/* ===== Chart 4 — Emerging Company Lifecycle ===== */}
      <figure className="mt-10">
        <Image
          src="/wework-chart-lifecycle.png"
          alt="Emerging Company Lifecycle diagram. A capitalisation-vs-time curve showing the migration from Angel ($1.5m) to Launch, Late Stage, IPO ($300m), Late Stage IPO ($10bn) and Mega Cap ($100bn). Private companies can trade at significant premiums to intrinsic value; small and mid cap public equities can trade at significant discounts to intrinsic value."
          width={1500}
          height={1050}
          className="w-full h-auto"
        />
      </figure>

      {/* ============================================================
          SUBSCRIBE AFFORDANCE
      ============================================================ */}

      <aside className="mt-16 border-t border-[var(--color-rule)] pt-10 text-sm text-[var(--color-muted)] leading-relaxed">
        <p className="font-serif italic">
          Subscribe for new pieces from Fairbourne Capital — long-form on public and private
          markets, from the asset owner&apos;s perspective.{" "}
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
          <li>
            IPO age and market capitalisation data: company filings and historical share-price
            records at the time of each listing.
          </li>
          <li>Alternative assets under management by asset class: Preqin.</li>
          <li>
            US public versus PE-backed firm counts: World Federation of Exchanges, Federal Reserve,
            SEC, Thomson Reuters Eikon, Milken Institute, March 2018.
          </li>
          <li>European equity liquidity share: Morgan Stanley, 2019.</li>
        </ol>
      </section>
    </article>
  );
}
