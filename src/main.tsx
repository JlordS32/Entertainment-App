import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

// Current tech stacK:
// TailwindCSS
// React
// Vite
// Typescript

// Upcoming:
// React Query
// React Router
// Firebase for Authentication
// Firebase for Database
// Docker