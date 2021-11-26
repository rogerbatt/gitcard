Project created to practice react js, next js, next auth (authenticator) and tailwind (library of CSS).

<img src="https://media2.giphy.com/media/U907tgRcViQA2UYQhS/giphy.gif" width="700" height="300" />

## ATTENTION ##

`Getting Started`

`First,` you need to go to the website: [https://github.com/settings/apps] and create a new APP.

- New Github APP
- Put the name
- Homepage URL - is your website homepage (ex: [http://localhost:3000])
- Callback URL is: [http://localhost:3000/api/auth/callback]
- Unmark "Active" Webhook.
- User permissions mark : "Profile"
Now, you need to get thisformations:
[Client ID] (Starts with lv1.000000000)
In Client Secrets, you generate a new client secret and copy de code

`Second:`
Creat a .env.local file in the project folder and put this:

NEXTAUTH_URL= YOUR URL HOST (ex: http://localhost:3000)

GITHUB_ID= CLIENT-ID (ex: lv1.000000000)

GITHUB_SECRET= CLIENT SECRETS KEY


Now, you are able to run the project.
In the terminal, you run the `npm i` and `npm run dev`, and be happy <3

# Made by: @rogerbatt

# Technologies
Next JS
React JS
Twilwind CSS
Next Auth
Github

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
