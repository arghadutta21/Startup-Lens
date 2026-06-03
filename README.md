# StartupLens Lite

StartupLens Lite is a web application that helps entrepreneurs, students, startup founders, and investors quickly evaluate a business idea before investing significant time or money into it.

Think of it as a "Startup Health Check Tool." 

## Features
- **AI Analysis:** Submit your idea and receive AI-driven feedback instantly.
- **Score:** Get a 0-100 score indicating startup viability.
- **SWOT:** Automated strengths, weaknesses, opportunities, and threats analysis.
- **Reports:** Generate PDF reports for sharing or pitching.

## Getting Started

### Backend
1. \`cd server\`
2. \`npm install\`
3. Create a \`.env\` file in the server root and add your MongoDB and AI provider keys.
   \`\`\`
   MONGO_URI=mongodb://127.0.0.1:27017/startuplens
   PORT=5000
   GEMINI_API_KEY=your_key_here
   \`\`\`
4. \`npm start\` or \`npm run dev\`

### Frontend
1. \`cd client\`
2. \`npm install\`
3. \`npm run dev\`
