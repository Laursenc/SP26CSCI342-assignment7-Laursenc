- **Client:** https://sp-26-csci-342-assignment7-laursenc-3cmmvspv6.vercel.app/
- **Server:** https://platescout-charliel.onrender.com
- **Server health check:** https://platescout-charliel.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment
Broadly I learned the small errors build up over time creating giant errors. Honestly I was suprised at how bad alot of the UI was for these hosting applications was. When trying to debug it was extremely hard to find what I was looking for in the various sections. It was personally quite difficult for me to do this whole thing, there is so many little things that need to be exactly correct otherwise the whole communication system breaks down. I was getting 500 error on logout, the token was not being removed properly because the token it was getting didn't have the "bearer " removed from it. It was an off by one error, I was removing the "bearer" but missing the space. I think i'd do the same thing next time, alot of the difficulty came down to unfamiliarity with the websites.