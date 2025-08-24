# Dr. Maher Ali Rusho - Ultra-Flagship Portfolio

An academically elite, performance-optimized personal research website showcasing cutting-edge work in AI, HCI, Materials Science, and Quantum Computing.

## 🚀 Features

- **Next.js App Router** with static export capability
- **Glassmorphic Design** with white-first aesthetic and neon accents
- **WebGL/Three.js** particle background with performance fallbacks
- **Framer Motion** animations with reduced-motion support
- **Responsive Design** optimized for all devices
- **WCAG AA Accessibility** compliant
- **JSON-Driven Content** for easy updates
- **Interactive Publications Gallery** with search and filtering
- **Animated Theme Toggle** with smooth transitions

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS with custom glassmorphism utilities
- **Animations**: Framer Motion
- **3D Graphics**: Three.js for WebGL particle effects
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Static export ready for GitHub Pages

## 📁 Project Structure

```
├── app/
│   ├── components/          # Reusable UI components
│   ├── globals.css         # Global styles and utilities
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx           # Main homepage
├── data/                   # JSON data files
│   ├── profile.json       # Personal information and links
│   └── publications.json  # Research publications
├── content/               # Additional content
│   └── awards.json       # Awards and recognition
├── public/               # Static assets
│   ├── profile.jpg      # Profile photo (add your own)
│   ├── papers/          # Paper thumbnails
│   └── awards/          # Award badges
└── next.config.js       # Next.js configuration
```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Export Static Site**
   ```bash
   npm run build
   # Output will be in the 'out' directory
   ```

## 📝 Content Management

### Profile Information
Edit `data/profile.json` to update:
- Personal information and taglines
- Academic affiliations
- Social and academic links
- Research highlights

### Publications
Manage research publications in `data/publications.json`:
- Add new papers with metadata
- Include DOI links and abstracts
- Upload thumbnails to `/public/papers/`
- Mark featured publications

### Awards & Recognition
Update `content/awards.json` with:
- Award titles and organizations
- Years and external links
- Badge images in `/public/awards/`

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Accent**: Teal (`#14b8a6`)
- **Glass**: White/dark with 40% opacity
- **Text**: Slate color palette

### Typography
- **Font**: Inter with optimized loading
- **Headings**: Tight tracking, gradient text
- **Body**: 150% line height for readability

### Spacing
- **System**: 8px base unit
- **Sections**: 6-10rem vertical padding
- **Components**: Consistent internal spacing

## 📱 Responsive Design

- **Mobile**: `< 768px` - Single column, touch-optimized
- **Tablet**: `768px - 1024px` - Two columns, hybrid layout
- **Desktop**: `> 1024px` - Multi-column, advanced interactions

## ♿ Accessibility Features

- **WCAG AA Compliance**
- **Keyboard Navigation** with visible focus rings
- **Screen Reader Support** with semantic HTML and ARIA
- **Reduced Motion** support for users with vestibular disorders
- **Color Contrast** ratios meet accessibility standards

## 🚀 GitHub Pages Deployment

1. **Configure Repository**
   - Update `next.config.js` with your repository name
   - Uncomment and set `basePath` and `assetPrefix`

2. **Build and Deploy**
   ```bash
   npm run build
   # Push the 'out' directory to gh-pages branch
   ```

3. **GitHub Pages Settings**
   - Enable Pages in repository settings
   - Set source to `gh-pages` branch
   - Site will be available at `https://yourusername.github.io/repository-name`

## 🔧 Customization

### Adding New Sections
1. Create component in `app/components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `Navigation.tsx`

### Modifying Animations
- Edit Framer Motion variants in components
- Adjust timing in `tailwind.config.ts`
- Respect `prefers-reduced-motion` settings

### Theme Customization
- Update color palette in `tailwind.config.ts`
- Modify CSS custom properties in `globals.css`
- Adjust glassmorphism effects

## 📊 Performance Optimizations

- **Image Loading**: Lazy loading with fallbacks
- **Font Optimization**: Preloaded Inter font
- **Code Splitting**: Automatic with Next.js
- **WebGL Fallbacks**: CSS/SVG animations for low-performance devices
- **Reduced Motion**: Automatic detection and adaptation

## 🔗 Important Links

Replace placeholder links in the JSON files with actual URLs:

- **ResearchGate**: Your researcher profile
- **OSF Profile**: Open Science Framework
- **Google Scholar**: Academic citation profile
- **Email**: Professional contact email
- **LinkedIn**: Professional network profile

## 📄 License

This project is designed for academic and professional use. Customize freely for your own portfolio needs.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and adapt for your own use while maintaining academic integrity.

---

**Dr. Maher Ali Rusho**  
*AI Researcher • HCI Innovator • Materials & Quantum Frontier Visionary*