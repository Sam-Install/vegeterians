# SokoFresh

Fresh groceries, delivered the same day. SokoFresh is a grocery delivery web app connecting home cooks in Ukunda and Mombasa to local farms — fruits, vegetables, meats, and pantry staples, sourced directly from farmers and delivered fresh.

**🔗 Live preview:** [sokogreen.vercel.app](https://sokogreen.vercel.app)

## Features

- Browse groceries by category — Fruits, Vegetables, Meats, and Pantry Staples
- Product detail pages with image gallery, quantity selector, and pricing
- Shopping cart with live item count and quantity management
- Sign-in gate on add-to-cart to keep orders tied to an account
- User authentication flow — sign in, register, and password recovery
- Responsive navigation with mobile menu
- About and Contact pages

## Tech Stack

- **React** — component-based UI
- **React Router** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icon set
- **Framer Motion** — animation (where used)
- **React Context** — cart state management

## Project Structure

```
src/
├── assets/            # Images (hero slides, product photos, etc.)
├── Components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── Fruits.jsx
│   ├── Vegetables.jsx
│   ├── Meats.jsx
│   ├── PantryStaples.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Signin.jsx
│   ├── Registration.jsx
│   └── ForgotPassword.jsx
└── App.jsx
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd sokofresh

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (or whichever port Vite/CRA assigns).

### Build for production

```bash
npm run build
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/fruits` | Fruits |
| `/vegetables` | Vegetables |
| `/meats` | Meats |
| `/pantrystaples` | Pantry Staples |
| `/product/:id` | Product Detail |
| `/cart` | Cart |
| `/about` | About |
| `/contact` | Contact |
| `/signin` | Sign In |
| `/register` | Registration |
| `/forgot-password` | Forgot Password |

## Roadmap

- [ ] Wire up real authentication state (currently mocked in `ProductDetail.jsx`)
- [ ] Checkout and payment integration
- [ ] Order history for signed-in users
- [ ] Persist cart across sessions (localStorage or backend)

## License

This project is currently unlicensed. Add a license of your choice (e.g. MIT) before making the repo public.
