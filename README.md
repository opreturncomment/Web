# ORC Protocol Dashboard

This is a Next.js dashboard for the ORC Protocol, showcasing the Bitcoin Security with Ethereum Flexibility concept. The dashboard includes a landing page and a detailed whitepaper page.

## Features

- Modern, responsive dashboard with a dark purple gradient theme
- Interactive homepage with buttons for Whitepaper, $SPCT, and Devtools
- Comprehensive whitepaper page with the ORC Yellow Paper content
- Optimized for deployment on Vercel

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS with Typography plugin
- Vercel deployment configuration

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/orc-protocol.git
cd orc-protocol
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Vercel

The project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository.
2. Connect to Vercel and select the repository.
3. Vercel will automatically detect the Next.js project and configure the build settings.
4. Click Deploy to start the deployment process.

Alternatively, you can deploy from the command line using the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel
```

## Project Structure

- `app/page.tsx` - The main homepage with the dashboard UI
- `app/whitepaper/page.tsx` - The whitepaper page that displays the ORC Yellow Paper
- `app/components/WhitepaperContent.tsx` - A component containing the full whitepaper content
- `app/globals.css` - Global styles and Tailwind CSS configuration
- `tailwind.config.ts` - Tailwind CSS configuration with typography plugin setup
- `vercel.json` - Vercel deployment configuration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by modern Web3 dashboards
- ORC Protocol Yellow Paper content courtesy of the ORC Protocol team
