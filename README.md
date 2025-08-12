# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and modern design patterns.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark/light mode toggle with system preference detection
- **Performance**: Optimized for speed and SEO with Next.js 14
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes for dark mode support

## 🏗️ Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Personal information and skills overview
- **Skills**: Technical skills with progress indicators
- **Projects**: Portfolio showcase with project details
- **Contact**: Contact form and information
- **Footer**: Additional links and information

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

To customize this portfolio for your own use:

1. **Update personal information** in the component files:
   - `src/components/Hero.tsx` - Name, title, and description
   - `src/components/About.tsx` - About section content
   - `src/components/Skills.tsx` - Your skills and technologies
   - `src/components/Projects.tsx` - Your projects and work
   - `src/components/Contact.tsx` - Contact information

2. **Update metadata** in `src/app/layout.tsx`

3. **Replace placeholder content** with your actual information

4. **Add your project images** to the `public` folder

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Color Scheme

The portfolio uses a CSS custom property-based theming system that supports both light and dark modes. Colors are defined in `src/app/globals.css` and can be easily customized.

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1024px and up)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

Alternatively, you can deploy to any platform that supports Next.js:
- Netlify
- AWS
- Digital Ocean
- Railway

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

Built with ❤️ using Next.js and Tailwind CSS
