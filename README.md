/README.md
## Deployment Setup

### Creating a Personal Access Token (PAT)

1. Go to [GitHub Settings](https://github.com/settings/tokens).
2. Click on **Generate new token**.
3. Choose **Fine-grained personal access tokens**.
4. Provide a **Token name**, e.g., "GitHub Actions Deployment Token".
5. Set the **Expiration** as desired.
6. Under **Repository access**, select:
   - **Only select repositories**
   - Choose `ur-royal-game`
7. Under **Permissions**, ensure the following are set to **Read & write**:
   - **Contents**
   - **Administration**
   - **Actions**
8. Click **Generate token**.
9. Copy the generated token.

### Adding the PAT to GitHub Secrets

1. Navigate to your repository on GitHub.
2. Click on **Settings**.
3. In the left sidebar, select **Secrets and variables** > **Actions**.
4. Click on **New repository secret**.
5. Enter the **Name** as `GH_PAT`.
6. Paste the copied token into the **Value** field.
7. Click **Add secret**.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
