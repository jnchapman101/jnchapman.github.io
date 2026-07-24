# Agent Notes for jnchapman.github.io

This is Jonathan Chapman's personal Jekyll/GitHub Pages site. Future agents should read this before editing.

## Repository and Deployment

- Repository: `jnchapman101/jnchapman.github.io`
- Default branch: `master`
- Custom domain: `jnchapman.com`
- Pages source is expected to build from the repository root on `master`.
- An explicit GitHub Actions workflow exists at `.github/workflows/pages.yml` and should be kept unless there is a deliberate replacement. It was added because branch pushes were reaching GitHub but the live Pages artifact was not updating promptly/visibly.
- After pushing, verify the live site with a cache-busting URL, for example `https://jnchapman.com/research/?check=<commit>`. Search snippets are stale and should not be used as deployment proof.
- The public GitHub Actions page can show Pages build/deploy runs even when GitHub settings are unavailable without login.

## Local Editing Rules

- Preserve the current Bulma/Jekyll design unless the user explicitly asks for visual redesign.
- Do not create separate research pages or field tabs unless explicitly requested. The Research tab should remain one page.
- Publication PDFs belong in `assets/pdf/` and should be linked with Jekyll's `{% link assets/pdf/... %}` syntax for local PDFs.
- Existing publication folders use `main.markdown` for visible citation/link text and `more.markdown` for the collapsible abstract.
- `_includes/paper.html` renders those two files and the abstract toggle; do not change it unless changing behavior globally is intended.
- `_layouts/research.html` controls section ordering and which paper folders appear under each section.


## Website Formatting Standards

Use these rules for visible website presentation unless the user explicitly asks for a redesign:

- Preserve the existing Bulma/Jekyll typography, colors, spacing, and mobile behavior. Keep pages simple and content-forward.
- Do not create new top-level pages, separate field tabs, landing-page style sections, decorative cards, or visual redesigns unless requested.
- On publication/research pages, visible journal article details should normally be limited to paper title, coauthors if any, journal or edited volume, and year.
- Hide issue numbers, page ranges, months, and similar formal citation details from visible pages unless needed to distinguish a publication. Do not remove those details from CVs, BibTeX, metadata, structured data, PDFs, or other formal citation sources.
- Keep paper titles, coauthors, topic tags, journal details, links, and abstracts visually separate. In paper `main.markdown` files, always leave a blank line after a `####` title heading before coauthors, tags, journal text, links, or other paragraphs.
- External links added to visible pages should use `target="_blank" rel="noopener noreferrer"`.
- Local publication PDFs belong in `assets/pdf/` and should be linked with Jekyll's link tag syntax rather than hard-coded relative URLs.
- Use text-link styling for abstract toggles: `Show abstract &darr;` when closed and `Hide abstract &uarr;` when open. Keep the toggle keyboard accessible and maintain `aria-expanded`.
- Published & forthcoming and Working papers should have consistent dividers between paper entries. Work in progress and Other publications should have clear vertical spacing between entries, but Work in progress should not show visible topic tags unless requested.
- When editing filters, publication status remains the main structure; topic filtering is secondary. Counts should count only actual Published & forthcoming and Working paper entries, not Work in progress or Other publications.
- Before publishing visual or formatting changes, check rendered output or the generated preview for title/coauthor separation, broken links, abstract toggle behavior, mobile layout, and stale/cached live pages.
## Data Page Workflow

- `_pages/datasets.markdown` is the visible Data page and uses the simple `_layouts/datasets.html` content wrapper. Preserve the existing Bulma/content typography unless the user asks for a redesign.
- Keep the UK Data Archive municipal accounts entry under `Original Datasets` unless the user asks to move or rename it.
- Put replication materials under `Replication Packages`; use direct repository/package links where verified, preferably stable DOIs for Dataverse, Zenodo, openICPSR, OSF, GitHub releases, or publisher supplementary files.
- Do not add article-page links as replication links unless they are the most authoritative page that actually provides file access. Do not add unverified or duplicate package entries.
- External Data page links should use `target="_blank" rel="noopener noreferrer"`.
- Adding visible replication-package entries must not remove or simplify full citation details from CVs, BibTeX, metadata, structured data, or other formal citation sources.
## Research Page Workflow

For publication changes:

1. Put or update PDFs in `assets/pdf/`.
2. Edit the paper's `main.markdown` for visible website text.
3. Edit the paper's `more.markdown` only when the abstract/detail text changes.
4. Move paper folders between `_research/working/` and `_research/published/` only when the publication status changes.
5. Update `_layouts/research.html` to place items in the correct section/order.
6. Keep title links, published-version links, local working-paper PDF links, and abstracts intact unless the user explicitly changes them.
7. Before committing, show the user changed files, structure summary, details hidden/changed, and preview instructions if they asked for review first.

Current requested Research page structure:

- One top-level Research page only.
- Near the top, same-page jump links to:
  - Published & forthcoming
  - Working papers
  - Work in progress
  - Other publications
- Those jump links should scroll to sections on the same page via anchors.
- No separate pages/tabs by research field.

## Visible Publication Detail Style

For journal articles and similar publications on the website, visible details should be simplified to reduce clutter:

- Paper title
- Coauthors, if any
- Journal or edited volume
- Year

Hide issue numbers, page ranges, months, and similar formal citation details from visible website presentation unless needed to distinguish a publication. Do not remove those details from formal sources such as CVs, BibTeX, metadata, structured data, or PDFs.

## CV Maintenance Workflow

Follow this workflow whenever the user asks an agent to update the CV in the CV folder.

### Preserve the Existing Version

- Treat the current `.tex` file as the archived previous version.
- Do not edit or overwrite the existing `.tex` file.
- Create a new version of the `.tex` file and make all changes only in that new file.
- Use the project's existing versioning convention. If none exists, use a clear sequential or date-based filename.
- Never overwrite an existing version.

### Review the Requested Changes

- Apply the changes specified in the user's command.
- Check the rest of the CV for related information that may now be out of date or inconsistent.

### Check for New Academic Work

- Review the publications and working-papers sections against the relevant pages already on the website.
- When appropriate, search authoritative external sources for new publications, accepted papers, working papers, updated publication details, journal assignments, volumes, issues, page numbers, DOIs, and co-author information.
- Prefer official journal pages, publisher pages, DOI records, institutional profiles, and established academic repositories.
- Do not add uncertain or unverified information.
- Clearly report anything that requires user confirmation.

### Update and Validate the New Version

- Edit only the newly created `.tex` file.
- Preserve the existing formatting and style.
- Compile the new version and resolve any errors introduced by the changes.
- Check the generated PDF for formatting problems, broken links, incorrect dates, inconsistent citations, and layout issues.
- Do not modify the website, commit, or publish the changes at this stage.

### Request Review

Before publishing, summarize:

- What was changed.
- What new or updated information was found.
- Any information that could not be verified.
- Any recommended additional edits.

Ask whether the user wants any further changes.

### Publish Only After Confirmation

- Publish only after the user explicitly approves the new version.
- Make the approved new version the current CV used by the website.
- Keep the previous `.tex` and PDF files unchanged as the archived prior version.
- Update the CV page or download link to point to the approved new PDF.
- Verify that the CV page and download link work correctly.
- Commit the new source file, generated PDF, website changes, and any version-index changes.
- Use a clear commit message describing the CV update.
- Do not commit or publish before receiving explicit confirmation.
## Preview and Testing

Expected local preview, if Ruby/Bundler are installed:

```powershell
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/research/`.

In this environment, `ruby` and `bundle` have not been available on PATH, so local Jekyll preview may not be possible without installing or configuring Ruby. GitHub Pages/Actions may still build successfully even when local preview is unavailable.

## Deployment Verification

Use all of these checks when publishing:

1. `git status --short` is clean after commit.
2. `git log -1 --oneline --decorate` shows local `master` and `origin/master` at the pushed commit.
3. GitHub raw source reflects the new files when needed.
4. The GitHub Actions page shows the Pages build/deploy run completed.
5. The live custom domain shows the new text using a cache-busting URL.

Do not rely only on `git push` success. In this repo, pushes succeeded before the visible site refreshed.

## Topic Filter Workflow

The Research page may include a secondary topic filter, but publication status remains the main page structure. Use only these topic labels:

- Political Economy
- Economic History
- Behavioral Economics

Items may have more than one label. Topic filters are multi-select and use OR logic: an item appears if it has any selected topic. Classify by the substantive research question and contribution, not merely by journal, historical period, or dataset. If unclear, leave `data-topics=""` and list the item for user review.

Implementation notes:

- `_layouts/research.html` passes `topics="..."` into `_includes/paper.html` for structured paper entries.
- `_includes/paper.html` writes `data-topics`, `data-count="paper"`, and visible Bulma `.tag` labels for Published/Working paper entries.
- Work-in-progress and other-publication entries may be wrapped directly in `.research-item` blocks with `data-topics`, but should not carry `data-count="paper"`.
- The filter buttons are near the top of `_layouts/research.html` and handled in `_src/_typescript/main.ts` plus checked-in `js/main.js`.
- The default filter must be All on each load. Do not use local storage, session storage, cookies, or URL state to preserve a previous filter. All is an exclusive reset control; topic filters can be selected together.
- When filtering, keep a clear status line. The All button resets filters; do not add a separate Show all/Clear filter control unless the user asks for one. Make clear that topic labels overlap and counts should not be added across topics.
## Preview Workaround Used in This Session

When Ruby/Bundler are unavailable, a temporary static preview can be generated outside the repo source at `C:\Users\jonathanneil.chapman\Dropbox\Research\website\research-preview\index.html` and served from `http://127.0.0.1:4177/`. The helper used in this session is `C:\Users\jonathanneil.chapman\Dropbox\Research\website\make_research_preview.py`.

This preview is only for reviewing layout, visible text, topic filters, jump links, abstracts, and broad responsive behavior. It is not a substitute for a real Jekyll build before publishing when Ruby/Bundler are available.

If the preview server is running, do not delete the preview directory while it is serving files; regenerate in place or stop the server first.

## JavaScript Build Note

The site keeps TypeScript source in `_src/_typescript/main.ts` and checked-in compiled JavaScript in `js/main.js`. Normally regenerate JavaScript through the `_src` build scripts. In this environment, local Node/Yarn tooling for the project was not available on PATH, so `js/main.js` was manually updated to match the TypeScript source. Future agents should keep both files synchronized and explicitly mention if the compiled asset was updated manually.

## Filter Verification Checklist

Before asking the user to approve or before publishing filter changes, verify:

1. Opening or refreshing the page starts with All active.
2. No `localStorage`, `sessionStorage`, cookies, or URL parameters preserve a previous filter.
3. The active filter is visually obvious.
4. The status note says how many countable papers are visible, for example `Showing 7 out of 14 papers`.
5. The All button resets filters. Do not add a separate Show all/Clear filter button unless the user asks for one.
6. Multi-label items appear under every relevant topic.
7. Empty publication-status sections show a short message or are hidden, while publication status remains the main page structure. Other publications should appear only when All is selected.
8. Existing abstract toggles still work after filtering.
9. Local PDF links and published-version links still resolve.

## Documentation Maintenance

When the user says a workflow lesson should be saved, update both `AGENTS.md` for standing future-agent instructions and `HANDOFF.md` for current uncommitted/session state. Keep `HANDOFF.md` current after each meaningful change so future agents know what is drafted, what is approved, and what must not be committed yet.
## Markdown Rendering Gotcha

Paper `main.markdown` files are rendered through Jekyll Markdown. Always leave a blank line after a `####` title heading before adding coauthors, tags, journal text, links, or other paragraphs. Without the blank line, coauthor lines can be rendered as part of the title. When adding topic tags, place them after the title/coauthor block, but keep them in their own paragraph/block.

Before preview approval, inspect the rendered page or generated preview HTML to confirm titles are in `<h4>` elements and coauthors are separate paragraphs.
## Research Count Rule

The filter count shown on the Research page counts only actual paper entries in Published & forthcoming and Working papers. Work in progress and Other publications remain filterable/visible according to the active filter rules, but they are not part of the `Showing X out of Y papers` count. Structured paper entries should carry `data-count="paper"`; WIP and Other entries should not.

Work in progress entries may have `data-topics` so filters can include them, but topic labels should not be visibly displayed in the Work in progress section unless the user explicitly asks for that.

## Abstract Toggle and Research Spacing

Use HTML entities for the abstract toggle arrows: `Show abstract &darr;` and `Hide abstract &uarr;`. Avoid literal arrow characters in `_includes/paper.html`, `_src/_typescript/main.ts`, `js/main.js`, or the preview helper, because prior edits produced mojibake on Windows.

Published & forthcoming and Working papers should use consistent CSS dividers between paper entries. Use explicit `research-paper` classes and top borders on `.research-paper + .research-paper`. Work in progress and Other publications should use direct `margin-bottom` spacing on `research-list-item`; do not rely on adjacent sibling selectors there because preview/Jekyll rendering can wrap each entry in separate containers. Work in progress should not show visible topic tags.
## Jekyll Build Exclusions

`AGENTS.md` and `HANDOFF.md` are excluded in `_config.yml` because GitHub Pages can process Markdown files with optional front matter. These docs contain literal Jekyll/Liquid examples such as link tags, and should not be rendered as part of the website.
