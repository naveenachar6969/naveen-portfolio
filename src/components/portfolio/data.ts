import type {
  FolderCategory,
  FolderProject,
  FolderHighlight,
  FolderTimelineItem,
  FolderChapter,
  FolderStep,
  FolderWord,
  FolderLink,
} from "./types";

export const DEFAULT_CATEGORIES: FolderCategory[] = [
  { id: "fullstack", label: "Full-Stack", local: "à²ªà³‚à²°à³à²£ à²¸à³à²Ÿà³à²¯à²¾à²•à³", tone: "blue", kind: "page" },
  { id: "ml", label: "Machine Learning", local: "à²¯à²‚à²¤à³à²° à²•à²²à²¿à²•à³†", tone: "green", kind: "render" },
  { id: "testing", label: "QA & Testing", local: "à²—à³à²£à²®à²Ÿà³à²Ÿ à²­à²°à²µà²¸à³†", tone: "orange", kind: "poster" },
  { id: "backend", label: "Backend", local: "à²¬à³à²¯à²¾à²•à³†à²‚à²¡à³", tone: "yellow", kind: "brand" },
];

export const PROJECTS: FolderProject[] = [
  {
    title: "Sparkle Spree",
    local: "à²šà²®à²šà²®à²¾à§Ž à²µà³à²¯à²¾à²ªà²¾à²°",
    category: "fullstack",
    year: "2025",
    client: "Personal Project",
    role: "Full-Stack Developer",
    tools: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML5", "CSS3"],
    mark: "SPARKLE",
    summary: "Built a full-stack e-commerce platform implementing user authentication, responsive interfaces and REST API integration.",
    body: [
      "Designed and developed a complete MERN stack e-commerce application with user authentication, product catalog, shopping cart, and checkout flow.",
      "Implemented RESTful APIs using Express.js and Node.js for product management, user accounts, and order processing.",
      "Created responsive React frontend with modern UI components, state management, and seamless API integration.",
      "Used MongoDB for flexible document storage of products, users, and orders with proper indexing for performance.",
    ],
    href: "#",
  },
  {
    title: "Sentiment Analysis using LSTM",
    local: "LSTM à²¬à²³à²¸à²¿ à²­à²¾à²µà²¨à³† à²µà²¿à²¶à³à²²à³‡à²·à²£à³†",
    category: "ml",
    year: "2024",
    client: "Academic Project",
    role: "ML Engineer",
    tools: ["Python", "TensorFlow", "Keras", "Machine Learning", "NLP"],
    mark: "LSTM",
    summary: "Developed a text classification model using LSTM, processed datasets, engineered features and tuned hyperparameters to improve model accuracy.",
    body: [
      "Built a Long Short-Term Memory (LSTM) neural network for binary sentiment classification on text data.",
      "Preprocessed and cleaned large text datasets, including tokenization, padding, and vocabulary building.",
      "Engineered features including word embeddings, sequence length optimization, and attention mechanisms.",
      "Tuned hyperparameters (learning rate, batch size, epochs, dropout) to achieve optimal model accuracy.",
      "Evaluated model performance using accuracy, precision, recall, and F1-score metrics.",
    ],
    href: "#",
  },
];

export const HIGHLIGHTS: FolderHighlight[] = [
  {
    label: "Development",
    tone: "blue",
    lines: [
      "Building responsive applications with React.js and modern JavaScript",
      "Backend functionality with Node.js, Express.js and ASP.NET MVC",
      "REST API design, integration and documentation",
    ],
  },
  {
    label: "Database Engineering",
    tone: "green",
    lines: [
      "SQL Server, T-SQL, stored procedures and query optimization",
      "Database design, indexing strategies and performance tuning",
      "MongoDB for flexible document-based data modeling",
    ],
  },
  {
    label: "Quality Engineering",
    tone: "orange",
    lines: [
      "Manual testing, functional testing and regression testing",
      "API testing with Postman, test case design and defect tracking",
      "Debugging, UAT support and reliable release delivery",
    ],
  },
];

export const TIMELINE: FolderTimelineItem[] = [
  {
    from: "May 2025",
    to: "Apr 2026",
    title: "Software Engineer Intern / Software Consultant",
    place: "Qream Solutions Pvt. Ltd., Bengaluru",
  },
  {
    from: "Sep 2025",
    to: "Sep 2025",
    title: "Master of Computer Applications (MCA)",
    place: "Siddaganga Institute of Technology, Tumkur",
  },
  {
    from: "May 2023",
    to: "May 2023",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Vidyavahini First Grade College, Tumkur",
  },
];

export const CHAPTERS: FolderChapter[] = [
  {
    title: "About the Developer",
    local: "à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿à²¦à²¾à²°à²° à²¬à²—à³à²—à³†",
    points: ["Background", "Skills", "Philosophy", "Goals"],
    target: "about",
  },
  {
    title: "Technical Expertise",
    local: "à²¤à²¾à²‚à²¤à³à²°à²¿à²• à²ªà³à²°à³Œà²¢à²¤à³†",
    points: ["Languages", "Frontend", "Backend", "Databases", "Testing", "Cloud"],
    target: "work",
  },
  {
    title: "Project Portfolio",
    local: "à²ªà³à²°à³Šà²œà³†à²•à³à²Ÿà³ à²ªà³‹à²°à³à²Ÿà³â€Œà²«à³‹à²²à²¿à²¯à³‹",
    points: ["Sparkle Spree", "Sentiment Analysis", "Case Studies", "Code Quality"],
    target: "work",
  },
  {
    title: "Development Process",
    local: "à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²ªà³à²°à²•à³à²°à²¿à²¯à³†",
    points: ["Understand", "Architect", "Develop", "Test & Deliver"],
    target: "process",
  },
  {
    title: "Education & Certifications",
    local: "à²¶à²¿à²•à³à²·à²£ à²®à²¤à³à²¤à³ à²ªà³à²°à²®à²¾à²£à²ªà²¤à³à²°à²—à²³à³",
    points: ["MCA", "BCA", "NPTEL Java", "Modern JavaScript", "Coding Club Lead"],
    target: "contact",
  },
];

export const STEPS: FolderStep[] = [
  {
    title: "Understand",
    local: "à²…à²°à³à²¥à²®à²¾à²¡à²¿à²•à³Šà²³à³à²³à²¿",
    duration: "Phase 1",
    body: "Deep diving into requirements, understanding the problem space, identifying constraints, and aligning with stakeholders on the desired outcomes. Every great solution starts with true understanding.",
    outputs: ["Requirements doc", "User stories", "Acceptance criteria", "Technical constraints"],
  },
  {
    title: "Architect",
    local: "à²µà²¿à²¨à³à²¯à²¾à²¸ à²®à²¾à²¡à²¿",
    duration: "Phase 2",
    body: "Planning the system architecture, database schema, API contracts, and application flow. Choosing the right tools and patterns for scalability, maintainability, and performance.",
    outputs: ["Architecture diagram", "Database schema", "API specification", "Tech stack decision"],
  },
  {
    title: "Develop",
    local: "à²…à²­à²¿à²µà³ƒà²¦à³à²§à²¿ à²ªà²¡à³†à²¯à²¿",
    duration: "Phase 3",
    body: "Building functional, responsive applications with clean code practices. Writing tests, following coding standards, and iterating based on feedback. Code quality and developer experience matter.",
    outputs: ["Working features", "Unit tests", "Code reviews", "Documentation"],
  },
  {
    title: "Test & Deliver",
    local: "à²ªà²°à³€à²•à³à²·à²¿à²¸à²¿ à²®à²¤à³à²¤à³ à²’à²¦à²—à²¿à²¸à²¿",
    duration: "Phase 4",
    body: "Comprehensive testing including manual, functional, regression, and API testing. Debugging issues, validating against requirements, and deploying with confidence. Quality is not an afterthought.",
    outputs: ["Test reports", "Bug fixes", "Deployment", "Monitoring setup"],
  },
];

export const WORDS: FolderWord[] = [
  {
    quote: "Naveen combines strong development skills with a genuine quality mindset â€” rare and valuable in any engineering team.",
    name: "Senior Developer",
    role: "Qream Solutions",
    tone: "blue",
  },
  {
    quote: "His ability to switch between writing code and breaking it (testing) makes him uniquely effective at delivering reliable software.",
    name: "QA Lead",
    role: "Qream Solutions",
    tone: "green",
  },
  {
    quote: "Always eager to learn, Naveen picks up new technologies quickly and applies them thoughtfully to solve real problems.",
    name: "Team Lead",
    role: "Qream Solutions",
    tone: "orange",
  },
];

export const CONTACTS: FolderLink[] = [
  { label: "LinkedIn", value: "linkedin.com/in/naveen-v-ba7b4b2aa", href: "https://linkedin.com/in/naveen-v-ba7b4b2aa/" },
  { label: "GitHub", value: "github.com/naveenachar6969", href: "https://github.com/naveenachar6969" },
  { label: "Email", value: "Nbanaveen4@gmail.com", href: "mailto:Nbanaveen4@gmail.com" },
  { label: "Phone", value: "+91 72046 15411", href: "tel:+917204615411" },
];

export const PERSONAL_INFO = {
  name: "Naveen V",
  localName: "à²¨à²µà³€à²¨à³ à²µà²¿",
  handle: "@naveenv.dev",
  signature: "Naveen",
  years: "2024â€“2026",
  role: "Full-Stack Software Developer & QA Test Engineer",
  disciplines: ["Full-Stack Development", "Database Engineering", "Quality Assurance"],
  word: "THE DEVELOPER FILES",
  tag: "#NV",
  subtitle: ["à²¡à²¿à²œà²¿à²Ÿà²²à³", "à²•à²¾à²°à³à²¯à²¾à²²à²¯"],
  notes: ["Clean Code", "Reliable Software", "Continuous Learning"],
  blurb: "I'm Naveen, a Full-Stack Software Developer and QA Test Engineer passionate about building functional, scalable and reliable digital experiences. Based in Tumkur, Karnataka, India.",
  greeting: "Hello, I'm",
  email: "Nbanaveen4@gmail.com",
  resume: "/Naveen_V_Resume.pdf",
  contacts: CONTACTS,
  timeZone: "Asia/Kolkata",
  colors: {
    blue: "#00a3ff",
    green: "#a3e635",
    orange: "#fb923c",
    yellow: "#fde047",
  },
  ligatures: true,
  defaultTheme: "system" as "system" | "light" | "dark",
  height: "100svh",
};
