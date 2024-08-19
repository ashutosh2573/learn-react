To learn React js from Chai and code youtube.

1. 01-basics-react counter interview question.
2. vite app
    npm create vite@latest --> react -->javascript --> cd(project folder) --> npm install --> npm run dev

   <!-- 2.1 tailwind css -->

   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

   <!-- tailwind.config.js -->
   /** @type {import('tailwindcss').Config} \*/
   export default {
   content: [
   "./index.html",
   "./src/**/\*.{js,ts,jsx,tsx}",
   ],
   theme: {
   extend: {},
   },
   plugins: [],
   }

   <!-- index.css -->

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

Notes:
1. useCallback (fn , dependencies)
<!-- useCallback is a react hook that lets you cache a function definition between re-renders -->