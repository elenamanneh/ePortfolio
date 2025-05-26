/*
 * scaleFactor
 * Global scale multiplier for game sprites and map tiles
 */
export const scaleFactor = 4;

/*
 * dialogueData
 * Typed dialogue content for interactable objects in the inside scene
 */
export const dialogueData = {
  desk: `This is my desk. I worked here as a Software Developer and QA Analyst at theScore.
  I built backend services using Elixir and GraphQL, improved real-time data pipelines, and increased platform reliability.
  <span id="experience-link-inside" style="cursor:pointer; text-decoration:underline;">>> More about experience</span>`,
  "cs-degree": `This is my Computer Science degree from the University of Toronto.
  I specialized in Information Systems, gaining hands-on experience while studying topics like Software Engineering, Database Systems, Algorithm Design and Operating Systems.
  <span id="education-link-inside" style="cursor:pointer; text-decoration:underline;">>> More about education</span>`,
  kitchen: `This is the kitchen, this is where I spend most of my free time. I like to cook, try out new recipes, and just chill after a long day. It's my way of taking a break from screens.`,
  bookshelf: `Here is a collection of some of my favorite CS projects.
  There is Pursuiter, a job application website powered by AI to give feedback and filter applicants.
  I also built Stocks Social Network, a full social platform that optimized a massive PostgreSQL database.
  And Walnut, a course scheduler Android app to help UofT students plan their classes more easily.

  <span id="projects-link-inside" style="cursor:pointer; text-decoration:underline;">>> More about projects</span>`,
};

/*
 * doorPrompt
 * HTML for the entry choice dialogue on the outside scene
 */
export const doorPrompt = `
  <div style="margin-bottom: 1rem;">
    Hello! I am Elena. Welcome to my portfolio. You can explore my house to learn more about me, or view the text version.
  </div>
  <strong><span id="opt-explore" style="cursor:pointer; text-decoration:underline;">
    [1] Explore inside the house
  </span></strong><br>
  <strong><span id="opt-text" style="cursor:pointer; text-decoration:underline;">
    [2] View text version
  </span></strong>
`;

/*
 * portfolioMenu
 * HTML menu for the text-based portfolio navigation
 */
export const portfolioMenu = `
  <h2>Elena Manneh</h2>
  <p>Senior U of T Comp. Sci. student with a strong background in fullstack development, and experience in operating systems, database system technology, and artificial inteliigence.</p>
  <hr/>
  <p>
    <span id="opt-edu" style="cursor:pointer; text-decoration:underline;">[1] Education</span><br/>
    <span id="opt-exp" style="cursor:pointer; text-decoration:underline;">[2] Experience</span><br/>
    <span id="opt-proj" style="cursor:pointer; text-decoration:underline;">[3] Projects</span>
  </p>
`;

/*
 * educationContent
 * HTML content for the Education scene
 */
export const educationContent = `
  <h2>Education</h2>
  <p>
    <strong>University of Toronto Scarborough</strong><br/>
    HBSc Computer Science, Information Systems Specialist
  </p>
`;

/*
 * experienceContent
 * HTML content for the Experience scene
 */
export const experienceContent = `
  <h2>Experience</h2>
  <p><strong>Software Engineer @ theScore</strong></p>
  <ul>
    <li>Developed and deployed backend services in Elixir/Phoenix and GraphQL, powering over 10 configurable CMS components used across multiple content channels.</li>
    <li>Designed gRPC APIs and schema-driven GraphQL endpoints for metadata updates and visibility toggles, supporting batch operations and live platform configuration.</li>
    <li>Built real-time data pipelines using Kafka, Protobuf, and Change Data Capture (CDC), improving downstream event integration with near-instantaneous latency.</li>
    <li>Enhanced data consistency via Ecto schema modeling and transactional update patterns, across critical features.</li>
    <li>Increased platform reliability by contributing to rollback-safe workflows and ExUnit test suites with 90%+ coverage.</li>
  </ul>
  <p><strong>Quality Assurance Analyst @ theScore</strong></p>
  <ul>
    <li>Conducted cross-platform testing and managed defect tracking, enhancing product launch efficiency.</li>
    <li>Authored comprehensive test documentation; executed verification and validation tests across applications.</li>
    <li>Collaborated with cross-functional teams; led functional, regression, and smoke testing initiatives.</li>
  </ul>
`;

/*
 * projectsHeader
 * Heading HTML for the Projects scene
 */
export const projectsHeader = `<h2>Projects</h2>`;

/*
 * projects
 * Array of project definitions with descriptions and optional GitHub links
 */
export const projects = [
  {
    name: "Pursuiter Job Application Website",
    // languages: [
    //   { name: "MongoDB", icon: mongodb },
    //   { name: "React", icon: react },
    // ],
    description: [
      "Led a 4-person <strong>Scrum team</strong> to design and ship a full-stack MERN job portal, using <strong>Figma</strong> for responsive UI/UX design; recognized as a top project for innovation and technical execution.",
      "Built and deployed a robust MVC-based platform on <strong>MongoDB Atlas</strong>, maintaining <strong>99.99% uptime</strong> with scalable pagination and search support for 1K+ users and listings.",
      "Integrated <strong>AI-powered feedback generation</strong> tailored to job descriptions and enforced role-specific application eligibility, boosting recruiter efficiency and applicant quality.",
    ],
    github: "https://github.com/elenamanneh/final-term-project-pursuiter",
  },
  {
    name: "Pintos Operating System",
    // languages: [
    //   { name: "C", icon: c },
    //   { name: "Linux", icon: linux },
    // ],
    description: [
      "Developed priority scheduling and donation algorithms, improving <strong>thread scheduling efficiency by 30%</strong>, resulting in better resource allocation and reduced wait times.",
      "Fascilitated support for user programs through system calls and argument passing, <strong>increasing user program compatibility by 25%</strong>.",
      "Engineered virtual memory, including virtual-to-physical mappings and algorithms for eviction and swapping, optimizing memory usage and <strong>reducing page fault occurrences by 20%</strong>.",
      "Built filesystem including inode structures and growing files, increasing <strong>maximum file storage from 512 bytes to 8 MB</strong>, significantly enhancing scalability and storage capacity.",
    ],
  },
  {
    name: "Stocks Social Network",
    // languages: [
    // ],
    description: [
      "Engineered and normalized a <strong>PostgreSQL database</strong> for portfolios, watchlists, users, and stock reviews into <strong>BCNF</strong>, ensuring data integrity and eliminating redundancy across <strong>50K+ simulated stock records</strong>.",
      "Optimized complex queries through multi-column indexing and join rewrites, reducing portfolio aggregation and list generation query times by over 40%",
      "Implemented social networking features including friends, list sharing, and stock reviews, along with linear regression models for historical trend analysis and future price prediction.",
    ],
    github: "https://github.com/Kalshone/CSCC43-Project",
  },
  {
    name: "Walnut Course Scheduler",
    // languages: [
    //   { name: "Java", icon: java },
    //   { name: "Firebase", icon: firebase },
    //   { name: "Android", icon: android },
    // ],
    description: [
      "Developed a full-stack Android app in an <strong>Agile Scrum team of 5</strong>, enabling students to plan and manage UofT courses through an intuitive and responsive UI.",
      "Engineered and integrated a <strong>Firebase Realtime Database</strong> backend using clean architecture, reducing <strong>data retrieval time by 20%</strong> and improving <strong>query efficiency by 30%</strong>.",
      "Wrote modular and testable code adhering to <strong>OOP</strong> and <strong>SOLID</strong> principles, with comprehensive unit testing via <strong>JUnit</strong> and <strong>Mockito</strong> to ensure reliability and maintainability.",
    ],
    github: "https://github.com/b07boys/walnut",
  },
  {
    name: "Advanced System & File Descriptor Monitoring Tool",
    // languages: [
    //   { name: "Linux", icon: linux },
    //   { name: "C", icon: c },
    // ],
    description: [
      "Developed a <strong>real-time system and file descriptor monitoring tool</strong> in <strong>C</strong> on <strong>Linux</strong>, capable of handling <strong>concurrent queries</strong> for <strong>CPU</strong>, <strong>memory</strong>, <strong>user sessions</strong>, and <strong>file descriptors</strong>, achieving <strong>80% faster query response</strong> compared to sequential baselines.",
      "Engineered <strong>dynamic process introspection</strong> via the <strong>/proc</strong> filesystem and <strong>POSIX system calls</strong>, using <strong>pipes</strong>, <strong>signals</strong>, and <strong>linked lists</strong> for efficient interprocess communication and scalable data management across hundreds of active processes.",
      "Implemented <strong>customizable output modes</strong> (text and binary) with <strong>command-line flags</strong>, and added <strong>live terminal visualizations</strong> using ANSI sequences, improving usability and adaptability for operational and debugging use cases.",
    ],
  },
  // {
  //   id: 6,
  //   name: "File Descriptor Monitoring Tool",
  //   // languages: [
  //   //   { name: "Linux", icon: linux },
  //   //   { name: "C", icon: c },
  //   // ],
  //   description: [
  //     "Implemented file descriptor monitoring tool using POSIX APIs by accessing `/proc` filesystem and linked lists for dynamic data management.",
  //     "Supported customizable output options through command-line argument and output in text and binary formats.",
  //   ],
  // },
  {
    name: "Escape the Ghost",
    // languages: [
    //   { name: "Assembly", icon: asm },
    // ],
    description: [
      "Developed a fully interactive <strong>2D pixel-based game</strong> in low-level <strong>MIPS Assembly</strong>, featuring <strong>player-controlled movement</strong>, <strong>platform collision mechanics</strong>, and <strong>gravity simulation</strong>, showcasing proficiency in bare-metal game logic.",
      "Engineered <strong>collision detection algorithms</strong> and state-based outcomes (win/loss) using direct memory manipulation and register-level control, managing all game logic <strong>without a standard library or OS support</strong>.",
      "Designed and implemented <strong>multiple gameplay modes</strong> with unique behavior trees, increasing game complexity and replayability, while optimizing for performance across over <strong>1,000 lines of assembly code</strong>.",
    ],
    github: "https://github.com/elenamanneh/Escape-the-Ghost",
  },
  {
    name: "Reinforcement Learning in Gridworld",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Developed intelligent agents using <strong>Value Iteration</strong> and <strong>Q-Learning</strong> to make optimal decisions in dynamic environments.",
      "Fine-tuned key parameters such as <strong>discount factor</strong>, <strong>learning rate</strong>, and <strong>exploration rate</strong> to study policy convergence and behavioral adaptation, resulting in a <strong>2x improvement</strong> in policy effectiveness compared to baseline agents.",
      "Implemented visualizations of agent learning progress over time, allowing detailed analysis of convergence patterns.",
    ],
    github:
      "https://github.com/elenamanneh/pacmanProjects/tree/main/reinforcement",
  },
  {
    name: "Ghost Tracking in Pacman",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Engineered probabilistic models for agent localization using <strong>Bayesian inference</strong> and <strong>particle filtering</strong>, enabling accurate ghost tracking from noisy sensor readings in real time.",
      "Built modular inference algorithms to handle both exact and approximate belief updates, significantly enhancing agent <strong>adaptability</strong> and <strong>situational awareness</strong> during gameplay.",
      "Increased gameplay success rates through predictive movement modeling, demonstrating the application of <strong>probabilistic reasoning</strong> and <strong>uncertainty quantification</strong> in multi-agent systems.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/tracking",
  },
  {
    name: "AI-Based Search and Multi-Agent Strategies in Pacman",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Implemented advanced <strong>search algorithms</strong>, including <strong>Uniform Cost Search (UCS)</strong>, <strong>A*</strong>, and multi-agent strategies such as <strong>Minimax</strong>, <strong>Alpha-Beta Pruning</strong>, and <strong>Expectimax</strong>, enabling intelligent decision-making in adversarial game scenarios.",
      "Developed heuristic evaluation functions to assess game states and agent decisions, optimizing search performance and enhancing gameplay strategies.",
      "Engineered modular and extensible code architecture to support future enhancements and additional search algorithms, ensuring maintainability and scalability of the project.",
    ],
    // "Single Agent Pacman Repo": "https://github.com/elenamanneh/pacmanProjects/tree/main/search",
    github:
      "https://github.com/elenamanneh/pacmanProjects/tree/main/multiagent",
  },
  // {
  //   name: "Multi-Agent Strategies in Pacman",
  //   // languages: [
  //   //   { name: "Python", icon: python },
  //   // ],
  //   description: [
  //     "Developed multi-agent strategies using Minimax, Alpha-Beta Pruning, and Expectimax for adversarial and cooperative agents.",
  //     "Optimized algorithms and developed evaluation functions to assess game states and agent decisions.",
  //   ],
  //   github: "https://github.com/elenamanneh/pacmanProjects/tree/main/multiagent"
  // },
  {
    name: "Graffit Social Networking Platform",
    // languages: [
    //   { name: "C", icon: c },
    // ],
    description: [
      "Created standalone social networking platform with recommendation system.",
      "Utilized graph ADT for efficient user relationship modeling.",
    ],
  },

  {
    name: "Quadtree Image Decomposition",
    // languages: [
    //   { name: "C", icon: c },
    // ],
    description: [
      "Implemented image decomposition program in C, leveraging binary tree ADT for efficient data management.",
      "Enabled image loading and essential processing operations, including pixel management.",
      "•	Developed region splitting algorithm based on color similarity and user-defined threshold.",
    ],
    github: "https://github.com/elenamanneh/SimplifiedQuadtree",
  },
];

/*
 * contactContent
 * HTML content for the Contact Me scene
 */
export const contactContent = `
  <div id="contact-box">
    <h2>Contact Me</h2>
    <p>Email: elenamanneh@gmail.com</p>
    <p>LinkedIn: <a href="https://linkedin.com/in/elenamanneh" target="_blank">linkedin.com/in/elenamanneh</a></p>
    <p>GitHub: <a href="https://github.com/elenamanneh" target="_blank">github.com/elenamanneh</a></p>
  </div>
`;

/*
 * returnPrompt
 * Standard prompt to instruct users to press Escape to return
 */
export const returnPrompt = `
  <p class="desktop-only"><em>Press Escape to return</em></p>
`;
