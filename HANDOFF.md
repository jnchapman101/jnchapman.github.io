# Session Handoff

## Current State

The repository has uncommitted research-page edits requested by the user. Do not commit them until the user reviews and approves.

Current uncommitted files at time of writing:

- `_layouts/research.html`
- `_research/published/econographics/main.markdown`
- `_research/published/franchise/main.markdown`
- `_research/published/interestRatesMortalityDecline/main.markdown`
- `_research/published/lossaversion/main.markdown`
- `_research/published/mortality/main.markdown`
- `_research/published/preferences/main.markdown`
- `_research/published/reform/main.markdown`
- `_research/published/signaling/main.markdown`

## User's Current Request

The user asked to avoid repeated missed steps and ensure the workflow is documented in session/agent files. This file plus `AGENTS.md` were added for that purpose.

Immediately before this request, the user asked for Research page changes and explicitly said: before committing anything, show:

- files changed;
- summary of the new structure;
- publication details proposed for hiding;
- how to preview locally.

That review was already shown once, but the edits are still uncommitted.

## Research Page Edits Currently Uncommitted

- `research.html` keeps one Research page.
- Added top same-page jump links:
  - Published & forthcoming
  - Working papers
  - Work in progress
  - Other publications
- Added matching section IDs:
  - `published-forthcoming`
  - `working-papers`
  - `work-in-progress`
  - `other-publications`
- Simplified visible published-paper details to title, coauthors where present, journal/volume, and year.
- Preserved existing title links, published-version links, local PDF links, and abstracts.
- Verified local PDFs referenced by edited published entries exist.
- Could not run local Jekyll preview because `ruby` and `bundle` are not on PATH.

## Deployment Lesson From This Session

Earlier homepage and research changes were committed and pushed, but the live site initially remained stale. GitHub raw source showed the updates while `jnchapman.com` did not. An explicit Pages workflow was added at `.github/workflows/pages.yml`, then GitHub Actions showed successful Pages builds/deployments and the live page eventually updated when checked with a cache-busting URL.

Future agents should verify live deployment using cache-busted custom-domain URLs and Actions status, not just `git push` or search snippets.

## Topic Filter Edits Currently Uncommitted

The user approved the draft page visually and then requested topic labels and a secondary filter. Current uncommitted filter work:

- Added filter buttons in `_layouts/research.html`: All, Political Economy, Economic History, Behavioral Economics.
- Added `data-topics` labels through `_includes/paper.html` and visible `.tag` labels.
- Added filter behavior in `_src/_typescript/main.ts` and manually updated checked-in `js/main.js` because local Yarn/TypeScript tooling is not available.
- Default state is All on each load; no local storage/session storage/URL persistence is used.
- Active filter uses `button is-dark`. The topic labels are multi-select, and the status note reads `Showing X out of Y papers`.
- The paper count includes only Published & forthcoming and Working papers, currently 14 countable papers total. Work in progress and Other publications are not included in the count.
- There is no separate Show all/Clear filter button; the All button resets filters.
- Empty sections show a short message while filtered.

Before committing, the user asked to see files changed, labels for every item, unclear items needing classification, filtered-state appearance, and local preview instructions.
## Additional Lessons Saved for Future Updates

- The user will keep updating this website and wants workflow lessons preserved as they emerge.
- Keep `AGENTS.md` and `HANDOFF.md` updated whenever a process issue is discovered.
- The temporary preview URL used for review is `http://127.0.0.1:4177/`.
- The preview is generated from `C:\Users\jonathanneil.chapman\Dropbox\Research\website\make_research_preview.py` into `C:\Users\jonathanneil.chapman\Dropbox\Research\website\research-preview\`.
- Because Ruby/Bundler are unavailable on PATH, the preview is a static approximation. Use it for user review, but still treat GitHub Pages/Actions as the deployment build unless a real local Jekyll build becomes available.
- Earlier preview checks used the old 22-item denominator. After the latest correction, regenerate and re-check the preview before presenting for final approval.
- `js/main.js` was manually synchronized with `_src/_typescript/main.ts` because project build tools were unavailable. Mention this before commit/publish review.
- Do not commit the current work until the user explicitly approves after seeing the requested summary.
## Latest Label Adjustment

The user asked to label all Economic History papers as also Political Economy except for the spending and mortality decline paper. Interpreted that exception as `_research/published/mortality` (`The Contribution of Infrastructure Investment to Britain's Urban Mortality Decline 1861-1900`), which remains Economic History only. Added Political Economy to:

- `_research/published/interestRatesMortalityDecline`
- `_research/working/jps`
- `_research/working/smallpox`
- Government Austerity and the Anti-Vaccination WIP
## Latest Filter Behavior Adjustment

The user clarified that topic filters must not be mutually exclusive, and later clarified the count rule. Current intended behavior:

- All is the default on open/refresh and acts as the reset control.
- Political Economy, Economic History, and Behavioral Economics can be selected together.
- Multi-select uses OR logic and counts unique visible countable papers.
- Count note says `Showing X out of 14 papers.`
- Work in progress and Other publications are not part of the paper count.
- Work in progress remains filterable, but topic labels are not visibly shown there.
- Other publications should appear only when All is selected.
- Equality of Opportunity or Equality of Outcome is labeled Political Economy and Behavioral Economics.
- There is no separate Show all papers button.

Expected preview counts after regeneration:

- All: `Showing 14 out of 14 papers.`
- Political Economy: `Showing 6 out of 14 papers.`
- Economic History: `Showing 7 out of 14 papers.`
- Behavioral Economics: `Showing 7 out of 14 papers.`
- Political Economy + Behavioral Economics: `Showing 13 out of 14 papers.`
- Other publication items visible under All and hidden under topic filters.
## Redundant Asset Cleanup

The user asked to remove redundant website assets. Removed unreferenced PDF files:

- Root duplicate: `poorLaw.pdf`
- Root duplicate: `Preference_elicitation_chapter FINAL.pdf`
- Root duplicate: `selfAssessments.pdf`
- Unreferenced asset PDF: `assets/pdf/dose.pdf`
- Unreferenced asset PDF: `assets/pdf/franchiseFinal.pdf`

After removal, all local Jekyll `{% link ... %}` targets in `_pages`, `_research`, `_includes`, and `_layouts` were checked and exist. Referenced copies remain in `assets/pdf/`.
## Latest Author/Title Rendering Fix

The user noticed that authors were appearing as part of some paper titles in the preview. Cause: several working-paper `main.markdown` files had `with ...` immediately after a `####` heading without a blank line. Fixed by adding blank lines after the title headings in:

- `_research/working/selfAssessments/main.markdown`
- `_research/working/wtap/main.markdown`
- `_research/working/jps/main.markdown`

Also cleaned the smallpox idea line from mojibake to `vaccination&mdash;and control of smallpox&mdash;relied...`.

Verification: regenerated the local preview and confirmed the generated HTML contains separate `<h4>` title elements and separate `<p>with ...</p>` coauthor paragraphs for the affected papers.
## Latest Count/WIP Label Adjustment

The user clarified that Work in progress and Other publications should not be part of the paper count. Current implementation:

- `_includes/paper.html` adds `data-count="paper"` to structured Published/Working paper entries.
- JavaScript counts only `.research-item[data-count="paper"]` for `Showing X out of Y papers`.
- Work in progress entries keep `data-topics` and remain filterable, but visible `.tag` labels were removed from `_research/wip.markdown`.
- Other publications remain uncounted and should appear only when All is selected.
- Generated preview check: 14 countable papers, 22 total research items, 0 visible WIP tags, and 0 title headings containing `with ...`.
- Count checks after preview regeneration: All `14 of 14`, Political Economy `6 of 14`, Economic History `7 of 14`, Behavioral Economics `7 of 14`, Political Economy + Behavioral Economics `13 of 14`.

## Latest Abstract/Spacing Adjustment

The user reported that the abstract arrow was not rendering correctly and that spacing/dividers were inconsistent. Current changes:

- `_includes/paper.html` now uses `Show abstract &darr;`.
- `_src/_typescript/main.ts`, checked-in `js/main.js`, and the preview helper now use `innerHTML` with `&darr;` / `&uarr;` for the abstract toggle state.
- `_includes/paper.html` adds `research-paper` to structured paper entries, and `_src/_sass/main.scss` plus checked-in `css/main.css` add consistent horizontal dividers between Published & forthcoming and Working paper entries.
- `_research/wip.markdown` and `_research/other.markdown` add `research-list-item`; CSS applies direct `margin-bottom: 1.5rem` spacing because adjacent sibling selectors did not work after preview/Jekyll wrapping.
- Preview regenerated; browser computed-style checks confirmed `2px` top dividers and `24px` spacing for second/later Published and Working papers, plus `24px` bottom spacing for Work in progress and Other publications. Static checks found no arrow mojibake in the preview HTML and retained `Showing 14 out of 14 papers.`