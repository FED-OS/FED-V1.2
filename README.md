[README.md](https://github.com/user-attachments/files/31285639/README.md)
# FED-V1 (simplified)

This is a stripped-down version with no AI integration and no WebContainer sandbox —
just a plain React + Vite site. The goal is to prove the deployment pipeline
(GitHub → Cloudflare Pages) works before adding complexity back.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push this folder to your GitHub repo, connect the repo to Cloudflare Pages, and use:

- Build command: `npm run build`
- Output directory: `dist`

Once you see "It's alive. Deployment works ✅" at your live URL, deployment is
confirmed working end to end. From there, AI integration (chat + code generation)
and the WebContainer live-preview sandbox can be added back in as separate steps.
