# Satit Udomseuksa School - Mother's Day Event Confirmation

This web application provides a modern, responsive, and bilingual (Thai/English) form for parents to confirm their attendance for the Mother's Day 2025 event at Satit Udomseuksa School.

## Technology Stack

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (via CDN)
- **Notifications:** SweetAlert2
- **Backend:** Google Apps Script (to connect with Google Sheets and Google Drive)

## Features

- **Bilingual Interface:** Switch between Thai and English.
- **Responsive Design:** Looks great on desktops, tablets, and mobile phones.
- **Dynamic Form:** Grade selection depends on the chosen program, and time slots are automatically assigned.
- **Photo Uploads:** Easy drag-and-drop or file selection for up to 2 photos.
- **Attendance Checker:** Parents can view a list of confirmed attendees for their child's class.
- **Google Integration:** Submissions are sent to a Google Sheet, and photos can be organized in Google Drive automatically.

## Backend Setup (Google Apps Script)

**THIS IS A REQUIRED STEP.** For the form submission and attendance checking to work, you must set up and deploy the included Google Apps Script.

1.  **Create a new Apps Script Project:**
    - Go to [script.google.com](https://script.google.com).
    - Click **"New project"**. Give it a name, e.g., "Mother's Day App Backend".

2.  **Add the Script Code:**
    - Delete any existing code in the `Code.gs` file.
    - Copy the entire content of the `apps_script.gs` file from this project and paste it into the script editor.
    - Save the project (Ctrl+S or Cmd+S).

3.  **Run the Initial Setup:**
    - In the toolbar at the top, select the function `setup` from the dropdown list.
    - Click **"Run"**.
    - A dialog will pop up asking for authorization. Click **"Review permissions"**.
    - Choose your Google account.
    - You may see a "Google hasn't verified this app" warning. Click **"Advanced"**, then click **"Go to (your project name) (unsafe)"**.
    - Review the permissions (it will ask for access to Google Sheets and Google Drive) and click **"Allow"**.
    - The script will run and create a new Google Sheet in your Drive named "Mother's Day Event Attendance". The execution log at the bottom of the screen will show "Setup complete" and the new Spreadsheet ID. You can optionally copy this ID and paste it into the `SPREADSHEET_ID` variable at the top of the script.

4.  **Deploy the Script as a Web App:**
    - At the top right, click **"Deploy"** > **"New deployment"**.
    - Click the gear icon next to "Select type" and choose **"Web app"**.
    - In the "New deployment" dialog:
        - **Description:** `V1 - Initial deploy` (or anything you like).
        - **Execute as:** `Me`.
        - **Who has access:** `Anyone`.
    - Click **"Deploy"**.
    - The script will be deployed, and you will be given a **Web app URL**.

5.  **Configure the Frontend:**
    - Copy the **Web app URL** provided after deployment.
    - Open the `src/constants.ts` file in your project.
    - Paste the URL as the value for the `SCRIPT_URL` constant.
    - Save the file.

## Local Development

To run this project on your local machine, you need to have [Node.js](https://nodejs.org/) and npm installed.

1.  **Clone the repository:**
    Get the code from your GitHub repository onto your computer.

2.  **Install dependencies:**
    This command will download all the necessary packages like React and Vite. Open a terminal in the project folder and run:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This will start a local server, usually at `http://localhost:5173`. The website will automatically reload when you make changes to the code.
    ```bash
    npm run dev
    ```

## Deployment

This project is ready for deployment. Here are instructions for two popular free hosting services.

### Vercel (Recommended)

The easiest and fastest way to deploy this project.

1.  **Push your code to a GitHub repository.**
2.  **Connect your repository to Vercel:**
    - Sign up for a free account at [vercel.com](https://vercel.com) (it's recommended to sign up with your GitHub account).
    - On your Vercel dashboard, click "Add New..." -> "Project".
    - Find and import your project's repository from GitHub.
    - Vercel will automatically detect that this is a Vite project and set up the build configuration for you. No changes are needed.
3.  **Deploy:**
    - Simply click the **"Deploy"** button.
    - Vercel will build and deploy your site, providing you with a live URL (e.g., `your-project.vercel.app`). Any future pushes to your GitHub repository's main branch will automatically trigger a new deployment.

### GitHub Pages

You can also host this site for free on GitHub Pages. This project is pre-configured for it.

1.  **Update `vite.config.ts`:**
    Set the `base` property to your repository name. For example, if your repository is `https://github.com/your-username/mothers-day-app`, set `base` to `'/mothers-day-app/'`.
    ```ts
    // vite.config.ts
    export default defineConfig({
      // ...
      // Change '/your-repository-name/' to your actual repository name
      base: '/your-repository-name/', 
    })
    ```

2.  **Deploy:**
    Run the deploy script from your project's root directory:
    ```bash
    npm run deploy
    ```
    This command will build your project and push the contents of the `dist` folder to a new `gh-pages` branch on your repository.

3.  **Configure GitHub Repository:**
    - Go to your repository's "Settings" > "Pages".
    - Under "Build and deployment", set the "Source" to **"Deploy from a branch"**.
    - Under "Branch", select the `gh-pages` branch and the `/ (root)` folder, then click "Save".
    - Your site should be live at `https://your-username.github.io/your-repository-name/` in a few minutes.
