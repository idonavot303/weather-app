## Setup Instructions

1. **Open Terminal and Create Project Directory**

   ```bash
   # For macOS/Linux
   open terminal

   # Create a directory for the weather app
   mkdir weather-app-test

   # Navigate into the new directory
   cd weather-app-test
   ```

2. **Clone the Repository**

   ```bash
   git clone git@github.com:idonavot303/weather-app.git .
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Environment Setup**

   - i added the api key to the .env.local file so you don't need to create one(i know that it's not a good practice)

5. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

6. **Run the Production Server**
   ```bash
   npm run build
   npm run start
   ```
   The application will be available at `http://localhost:3000`
