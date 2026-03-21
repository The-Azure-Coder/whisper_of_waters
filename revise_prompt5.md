Here’s your **updated standalone AI prompt**, modified to include creating a branch, using your existing Neo DB string, and generating a `render.yaml` 👇

---

## 🚀 AI Implementation Prompt (Branch Setup + Render YAML + Neo DB Integration)

You are tasked with setting up deployment using **GitHub, Render, and an existing Neo database connection string**. The goal is to configure a **branch-based deployment workflow** and generate a **`render.yaml` configuration file**.

---

## 🌿 1. GitHub Branch Setup (Step-by-Step)

### Objective:

Create and use a dedicated deployment branch.

### Steps:

1. Create a new branch (example: `deploy` or `production`):

   ```bash
   git checkout -b deploy
   ```

2. Push the branch to GitHub:

   ```bash
   git push origin deploy
   ```

3. Set this branch as the **deployment branch** on Render

4. Future workflow:

   * All deploy-ready code is pushed to `deploy`
   * Render listens ONLY to this branch

---

## 🗄️ 2. Neo Database Integration

### Given:

* You already have a **Neo database connection string**

### Steps:

1. Store the connection string in environment variables:

   * Key: `DATABASE_URL`
   * Value: `<your-neo-connection-string>`

2. Update backend configuration:

   * Replace any local DB config with:

     ```env
     DATABASE_URL=your_neo_connection_string
     ```

3. Ensure:

   * Secure connection (SSL if required)
   * App reads from ENV, not hardcoded values

---

## ☁️ 3. Render YAML Configuration (REQUIRED)

Generate a `render.yaml` file in the root of the project.

### Example संरcture (adapt based on stack):

```yaml
services:
  - type: web
    name: hotel-app
    env: node # or python
    branch: deploy
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: DATABASE_URL
        sync: false
```

---

### 🔧 Notes:

* Replace:

  * `env: node` → `python` if using FastAPI/Django
  * Build/start commands based on your stack:

    * Python example:

      ```yaml
      buildCommand: pip install -r requirements.txt
      startCommand: uvicorn main:app --host 0.0.0.0 --port 10000
      ```

* `sync: false` ensures secrets are set in Render dashboard, not in code

---

## 🔁 4. Deployment Flow

1. Push code to `deploy` branch
2. Render detects change via `render.yaml`
3. Automatically:

   * Builds app
   * Starts service
   * Connects to Neo database

---

## ⚙️ 5. Final Setup on Render

1. Go to Render dashboard
2. Click **New → Blueprint**
3. Select your repository
4. Render auto-detects `render.yaml`
5. Add environment variables manually:

   * `DATABASE_URL`

---

## ✅ Expected Outcome

* Dedicated `deploy` branch controlling production
* `render.yaml` fully configured
* Auto-deploy working on push
* App connected to Neo database via ENV
* Clean, production-ready deployment setup


