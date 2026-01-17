# Developer FAQ Blog

Final Website: https://www.scaling-guacamole.com/


A modern, accessible blog website featuring developer productivity tips and best practices.

## 🌟 Features

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle (Alt + T)
- **Gradient Design**: Beautiful purple gradient theme throughout
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Fast & Lightweight**: Pure HTML, CSS, and JavaScript with no dependencies
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🚀 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/codess-aus/DeveloperFAQ.git
   cd DeveloperFAQ
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

## 📝 Adding New Blog Posts

1. Create a new HTML file in the `posts/` directory (e.g., `posts/my-new-post.html`)
2. Use the template from `posts/capturedecisions.html` as a starting point
3. Update the hero image URL and content
4. Add a new blog card to `index.html` in the blog grid section

## 🌐 GitHub Pages Deployment

### First-time Setup

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the sidebar
3. Under **Source**, select "GitHub Actions"
4. The workflow will automatically deploy on every push to main

### Manual Deployment

You can also trigger deployment manually:
1. Go to the **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

Your site will be available at: `https://codess-aus.github.io/DeveloperFAQ/`

## ☁️ Azure Static Web Apps Deployment (Future)

To deploy to Azure Static Web Apps:

1. Install Azure CLI:
   ```bash
   curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
   ```

2. Login to Azure:
   ```bash
   az login
   ```

3. Create a Static Web App:
   ```bash
   az staticwebapp create \
     --name developer-faq-blog \
     --resource-group <your-resource-group> \
     --source https://github.com/codess-aus/DeveloperFAQ \
     --location "East US 2" \
     --branch main \
     --app-location "/" \
     --output-location "/"
   ```

4. The Azure CLI will create a GitHub Actions workflow automatically

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --accent-from: #667eea;  /* Gradient start color */
    --accent-to: #764ba2;    /* Gradient end color */
}
```

### Theme

The theme persists using localStorage and respects system preferences by default.

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Focus indicators
- Reduced motion support
- High contrast in both themes

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for developer productivity
