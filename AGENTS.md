<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Site architecture
- Keep internal page tops, numbered lists, and the corporate clients strip in shared site components so repeated approved patterns stay consistent across pages.
- Define new visual styling through semantic tokens in src/styles.css and use the existing .duo and .tile image interaction patterns to preserve the approved design.
- Use SiteImage for new page photos so unavailable supplied assets retain their allocated image space without exposing broken-image text.
