export const projects = [
  {
    title: "Employee Management System",
    image: "src/assets/images/ems.png",
    description: `
Nexwork is a real-time employee management system with role-based access for Admins and Users. 
Admins can assign tasks, monitor progress, and manage leave requests, while users can view assigned tasks and apply for leaves. 
The app uses React with Context API for state management, Material UI and Shadcn UI for responsive UI, 
and Firebase (Authentication + Realtime Database) for secure login and live data handling. 
Key features include skeleton loaders, modal forms, toast notifications, and Recharts for admin analytics.
`,
    technologies: ["React", "Firebase", "Material UI", "Recharts", "Context API", "Toastify"],
    githubLink: "https://github.com/rahulakula07/crewops",
    demoLink: "https://crewops-myqq.vercel.app/"
  },
  {
    title: "QuickKart E-commerce",
    image: "src/assets/images/quickkart.png",
    description: `
QuickKart is a modern full-stack e-commerce platform with product listing, cart, secure checkout, and order tracking. 
The frontend is built using React with Zustand for state, styled using Tailwind CSS, and animated using Framer Motion. 
The backend includes Express.js, MongoDB (Mongoose), Redis for session storage, and JWT + bcrypt for authentication. 
It integrates Stripe for payments, Cloudinary for image uploads, and Mailtrap for email handling.
`,
    technologies: ["React", "Node.js", "MongoDB", "Redis", "Stripe", "Tailwind CSS", "JWT", "Cloudinary"],
    githubLink: "https://github.com/rahulakula07/MERNproject",
    demoLink: "https://mer-nproject-liart.vercel.app/"
  },
  {
    title: "Travel Planner Platform",
    image: "src/assets/images/travelplanner.png",
    description: `
The Travel Planner is a dynamic web app that lets users explore destinations, connect with local guides, and book customized experiences. 
Built using vanilla JavaScript (ES6+), Bootstrap, and Firebase, it features responsive design, real-time data syncing, 
form validation, and a clean modular JS structure for maintainability. 
Firebase Authentication and Realtime Database manage users and bookings efficiently.
`,
    technologies: ["JavaScript", "Bootstrap", "Firebase", "HTML5", "CSS3"],
    githubLink: "https://github.com/rahulakula07/travel-planner-js-main-project",
    demoLink: "https://travel-planner-js-main-project.vercel.app/"
  }
]
