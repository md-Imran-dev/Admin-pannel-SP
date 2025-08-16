# Quotient Admin Dashboard

A modern, responsive admin dashboard built with React, featuring a clean UI with light and dark theme support, comprehensive order management, revenue visualization, and customer activity tracking.

![Quotient Admin Dashboard](dashboard_screenshot.png)

## How to Run Your Project

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/quotient_admin.git
   cd quotient_admin
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Tech Stack Used

### Core Technologies

- **React**: Frontend library for building the user interface
- **Material-UI**: Component library for React that implements Google's Material Design
- **styled-components**: CSS-in-JS library for component styling
- **React Router**: For navigation and routing within the application

### Additional Libraries

- **Recharts**: Composable charting library built on React components
- **Context API**: For state management (theme, data)
- **Material Icons**: Icon library

### Key Features

- Responsive layout that works on mobile, tablet, and desktop
- Light and dark theme support
- Interactive data visualization with charts
- Order management system
- Activity tracking
- Comprehensive dashboard with real-time metrics

## Assumptions and Decisions Made

### Design Decisions

- **Component Structure**: Used a modular approach with reusable components to improve maintainability
- **Styled Components**: Chose styled-components for styling to enable theme-based styling and component-specific CSS
- **Theming System**: Implemented a comprehensive theming system with light/dark mode support
- **Responsive Design**: Designed the UI to be fully responsive across different screen sizes
- **Dashboard Layout**: Prioritized important metrics at the top with detailed information below
- **Data Visualization**: Used pie and bar charts for better data representation and understanding

### Technical Decisions

- **Context API**: Used React's Context API for state management instead of Redux for simplicity
- **Material-UI**: Selected MUI for UI components to ensure consistency and reduce development time
- **Folder Structure**: Organized components by feature and function for better code organization
- **Mock Data**: Used static mock data for development and demonstration purposes
- **Performance Optimization**: Implemented component memoization where appropriate

### Future Enhancements

- Integration with a backend API for real data
- User authentication and authorization
- Advanced filtering and search capabilities
- Export functionality for reports
- Enhanced analytics with more chart types
- Notifications system

## License

MIT

---

Created with ❤️ by Your Name/Team Name
