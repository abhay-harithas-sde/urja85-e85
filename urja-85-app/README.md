# 🌱 Urja-85 | Fueling New India 🇮🇳

> **Built with Next.js, Supabase, and Google Gemini AI to Build with Vitality for Drive.**

Urja-85 is a Digital Public Infrastructure (DPI) built to solve India's dual crisis of urban pollution (stubble burning) and massive crude oil import dependency (₹12 Lakh Crores annually). By creating a seamless digital bridge between our Annadatas (Farmers) and citizens, we are accelerating the transition to E85 (85% Ethanol) flex-fuel.

## 🚀 Key Features

*   **🌾 Kisan Connect:** A dedicated portal for farmers to estimate their agricultural biomass value (using AI) and sell it directly to local Oil Marketing Companies for ethanol production, eliminating middlemen.
*   **🗺️ E85 Route Planner:** A gamified 3D mapping experience for citizens to plan their trips, find E85 fuel stations along their route, and calculate their CO2 savings.
*   **🤖 Prakriti AI:** An intelligent, context-aware chatbot powered by Google Gemini AI that educates users about flex fuels and green energy.
*   **📷 AI RC Scanner:** Uses Gemini Vision AI to instantly scan a vehicle's RC (Registration Certificate) and determine its compatibility with E85 fuel.
*   **📊 Strategic Reserve Predictor:** AI-powered predictive analytics that forecast regional ethanol shortages based on agricultural output and demand.

## 🛠️ Tech Stack

*   **Frontend:** Next.js 14 (App Router), React, TailwindCSS, Framer Motion
*   **Backend & Auth:** Supabase (PostgreSQL, Row Level Security, Auth)
*   **Artificial Intelligence:** Google Gemini AI (Text & Vision APIs)

## 💻 Getting Started (Local Development)

Follow these steps to run Urja-85 locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abhay-harithas-sde/urja85-e85.git
    cd urja85-e85
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root directory and add your API keys:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    GEMINI_API_KEY=your_gemini_api_key
    ```

4.  **Database Setup:**
    Go to your Supabase project's SQL Editor and run the contents of the `schema.sql` file located in the root of this repository. This will create the necessary tables (`profiles`, `vehicles`, etc.) and Row Level Security policies.

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

6.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏆 Hackathon Submission

This project was built for the **Independence Day Project (#NIATForNewIndia)**. 
*Zero middlemen. Cleaner air. Energy Independence by 2047. We aren't just building an app; we are building a Net-Zero India. Jai Hind!*
