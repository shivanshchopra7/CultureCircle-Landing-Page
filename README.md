1. Planning and Strategy:
Technology Selection:
I chose Next.js for the web application due to its built-in server-side rendering and seamless integration with React components. It also works efficiently with Tailwind CSS, which enables rapid and responsive styling using utility-first classes.

Tailwind CSS provided a scalable foundation for managing layout, spacing, and typography across various screen sizes.

Component Architecture & Data Flow:
To maintain clean and reusable code, I broke the interface down into modular components. For data fetching, I used Static Site Generation (SSG) or Server-Side Rendering (SSR) via Next.js to ensure the product data is loaded efficiently.

Challenges:
One of the main challenges was achieving pixel-perfect design consistency across different devices due to varying screen sizes and pixel densities.

2. Design Decisions:
UI/UX Design:
The UI was crafted to align with the provided Figma file, prioritizing clean typography, structured layouts, and intuitive navigation. I used Tailwind's Flexbox and Grid utilities to achieve a responsive design on the web.

Responsive Design & Accessibility:
Tailwind’s responsive utilities such as sm:, md:, and lg: were used throughout the project to ensure that the layout adapts smoothly across different breakpoints.

State Management and API Integration:
React's state management was used for handling product-related interactions, such as tracking selected sizes and displaying product images.

3. Implementation Details:
Error Handling and Edge Cases:
The application includes fallback UIs, such as loading spinners and error messages, to handle failed data fetching scenarios. For edge cases like missing product images or unavailable sizes, informative messages or placeholders are displayed.

Performance Optimizations:
I leveraged Next.js’s next/image component for automatic image resizing and lazy loading, which significantly improved performance on the web.

4. Deployment and Hosting:
Deployment Challenges:
The primary deployment challenge was ensuring all configurations were correctly applied, especially environment variables. The web version was deployed using Vercel, which offers streamlined integration with Next.js.

Main Approach:
My approach was guided by clean design principles, heavily inspired by the Culture Circle website. I emphasized whitespace, consistent typography, and effective use of UI elements. The layout was carefully analyzed and broken into components to maintain a well-organized codebase. Tailwind’s media queries were consistently applied to ensure full responsiveness.

Note on Mobile Version:
Initially, the plan included developing a mobile version using Flutter. However, as I am still in the early stages of learning Flutter, I was unable to implement the mobile version successfully. Despite making several attempts, I faced difficulties translating the design into functional code. Therefore, for this submission, I focused on delivering a polished and fully functional web version using Next.js.
