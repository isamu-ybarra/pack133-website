# Connecting a custom domain

The site can launch on its `github.io` project address and move to a custom domain later without changing the content system.

1. Buy or use a domain controlled by Pack 133.
2. Verify the domain in the GitHub account or organization that owns this repository.
3. In **Repository settings → Pages**, add the custom domain.
4. Add the DNS records shown by GitHub at the domain registrar.
5. Set the repository Actions variable `SITE_URL` to the complete HTTPS domain, such as `https://www.pack133.org`.
6. Set the Actions variable `SITE_BASE` to `/`.
7. Wait for DNS verification, then enable **Enforce HTTPS**.

Do not leave DNS pointed at GitHub Pages if the Pages site is later disabled or the repository is removed.
