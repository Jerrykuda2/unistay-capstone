# UniStay Capstone

This repository contains the UniStay project.

- `backend/` — Express API handled by AWS.
- `unistay-frontend/` — React + Vite frontend.

## Deploying the frontend to Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repository.
3. Set the **Root Directory** to:

   `unistay-frontend`

4. Set the build settings:

   - Build Command: `npm run build`
   - Output Directory: `dist`

5. Add the following Environment Variables in Vercel:

   - `VITE_API_BASE_URL` = `https://your-aws-backend.example.com`
   - `VITE_GOOGLE_CLIENT_ID` = your Google client ID (optional)
   - `VITE_GOOGLE_OAUTH_DISABLED` = `true` (for dev/testing without Google auth)

6. Deploy the project.

## Notes

- The backend is already hosted on AWS, so the frontend should point to that backend URL.
- Keep secrets out of Git. Manage them in Vercel environment variables.
- If you use the dev Google fallback, set `VITE_GOOGLE_OAUTH_DISABLED=true`.
