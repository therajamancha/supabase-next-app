# Next.js CRUD Application with Local Storage

A modern Next.js application template for performing CRUD (Create, Read, Update, Delete) operations using browser's local storage. This template provides a solid foundation for building admin dashboards and data management interfaces.

## Features

- 🚀 Next.js 14 with App Router
- 📱 Responsive design with mobile support
- 🎨 Modern UI components with shadcn/ui
- 🔄 Real-time CRUD operations
- 💾 Local storage data persistence
- 📊 Dynamic breadcrumb navigation
- 🎯 Type-safe development with TypeScript
- 🎭 Client-side state management

## Project Structure

```
src/
├── app/
│   ├── admin/
│   │   └── (dashboard)/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   └── layout.tsx
├── components/
│   ├── app-sidebar.tsx
│   └── ui/
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       └── sidebar.tsx
└── lib/
    └── utils.ts
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd next-crud
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Data Management

- Create: Add new items to your local storage
- Read: View and search through your stored data
- Update: Modify existing items
- Delete: Remove items from storage

### Navigation

- Use the sidebar for main navigation
- Breadcrumb shows your current location in the app
- Responsive design adapts to different screen sizes

## Customization

1. **Adding New Features**

   - Create new components in the `components` directory
   - Add new routes in the `app` directory
   - Extend local storage functionality as needed

2. **Styling**
   - Customize the theme in `tailwind.config.js`
   - Modify component styles in their respective files
   - Use the provided utility classes for consistent styling

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icon set

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
