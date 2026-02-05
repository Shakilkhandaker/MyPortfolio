# Shakil Portfolio (React + Vite + Tailwind)

This is a ready-to-run personal portfolio site customized for **Khandakar Nur Md Shakil**.

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in terminal (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (Git “server”)
### 1) Create a new GitHub repo
Example: `shakil-portfolio`

### 2) Push this code
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### 3) Deploy
```bash
npm run deploy
```

Then go to GitHub → **Settings → Pages**  
Source should become: **gh-pages** branch (root).  
Your site will be live at:
`https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

## Customize your info
- Email: `src/components/Contact.jsx` and `src/components/Footer.jsx`
- Resume PDF: `public/assets/Shakil_Resume.pdf`
- Project links: `src/components/Work.jsx`

---

Template credits: ThemeWagon / PrebuiltUI (Eliana React template).
