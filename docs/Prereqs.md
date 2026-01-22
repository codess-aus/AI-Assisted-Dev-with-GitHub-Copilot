# Prerequisites and Setup (Start Here)

Use this quick-start to get ready for the workshop. It assumes you have nothing installed. If you already have a GitHub Enterprise/Business subscription, use it for Copilot (best experience); otherwise use the free tier or trial. Students: claim GitHub Student benefits for Copilot access.

## 1) GitHub Account (free, if you do not have one)
- Go to github.com/join and create an account (use a strong password + MFA).
- Verify your email.
- If your org provides GitHub Enterprise/Business, sign in with that account for Copilot access. Otherwise, start the free Copilot trial when prompted.
- Students: visit education.github.com/pack, apply with school email/ID, then enable Copilot in your account once approved.

## 2) Enable GitHub Copilot
- In GitHub: Settings → Copilot → enable for your account/repo scope.
- Prefer Enterprise/Business subscription; use free trial if you lack one.
- Students: after Pack approval, enable Copilot from the same Copilot settings page.

## 3) Recommended: Use GitHub Codespaces (fastest, nothing to install)
- Benefits: 1-click cloud dev environment, preinstalled Git, Node, Python, .NET, and VS Code extensions; runs in the browser or VS Code desktop.
- From the repo page: Code → Codespaces tab → “Create codespace on main”. Wait for the container to build (first start ~2–3 minutes).
- In the codespace, VS Code in the browser already has Copilot and common language runtimes. Skip local installs and go straight to the labs.

## 4) VS Code Desktop Setup (if not using Codespaces)
- Install VS Code: code.visualstudio.com.
- Sign in to GitHub inside VS Code (Accounts icon) so Copilot works.
- Install extensions: “GitHub Copilot”, “GitHub Copilot Chat”.
- (Optional) Remote – Containers / Dev Containers extension if you want the same environment locally.

## 5) Language Runtimes (local option if you skip Codespaces)
- Python: Install from python.org; ensure `python` is on PATH. Verify: `python --version`.
- JavaScript/TypeScript: Install Node.js from nodejs.org. Verify: `node --version` and `npm --version`.
- C#: Install .NET SDK from dotnet.microsoft.com. Verify: `dotnet --version`.

## 6) Minimal Commands You May Need Locally
- Clone the repo: `git clone https://github.com/codess-aus/AI-Assisted-Dev-with-GitHub-Copilot.git`
- Open in VS Code: `code AI-Assisted-Dev-with-GitHub-Copilot`
- (Only if running Python labs locally) Create venv: `python -m venv .venv` then `source .venv/bin/activate` (Linux/macOS) or `.venv\Scripts\activate` (Windows). Install deps if provided: `pip install -r requirements.txt`.
- (Only if running Node labs locally) Install deps when needed: `npm install` in the project folder.

## 7) Quick Device Checklist
- Stable internet; browser that supports VS Code for the Web (Chrome/Edge/Firefox/Safari current versions).
- GitHub account with Copilot enabled (Enterprise/Business preferred; free or student if not available).
- Headphones/mic if you’ll join live guidance.

## 8) If Something Fails
- Codespaces build stuck? Delete the codespace and recreate; check the Codespaces status page.
- Copilot not responding? In VS Code, confirm you are signed in to GitHub and Copilot extension is enabled.
- Missing runtimes locally? Prefer switching to Codespaces to avoid setup friction.
