export const scaleFactor = 4;

export const dialogueData = {
  desk: `This is my desk. I worked here as a Software Developer and QA Analyst at theScore.
  I built backend services using Elixir and GraphQL, improved real-time data pipelines, and increased platform reliability.
  <span id="experience-link-inside" style="cursor:pointer; text-decoration:underline;">>> More about experience</span>`,
  "cs-degree": `This is my Computer Science degree from the University of Toronto.
  I specialized in Information Systems, gaining hands-on experience while studying topics like Software Engineering, Database Systems, Algorithm Design and Operating Systems.
  <span id="education-link-inside" style="cursor:pointer; text-decoration:underline;">>> More about education</span>`,
  kitchen: `This is the kitchen, this is where I spend most of my free time. I like to cook, try out new recipes, and just chill after a long day. It's my way of taking a break from screens and doing something hands-on.`,
  bookshelf: `Here is a collection of some of my favorite CS projects.
  There is *Pursuiter*, a job application website powered by AI to give feedback and filter applicants.
  Then there is *Stocks Social Network*, where I built a full social platform and optimized a massive PostgreSQL database.
  And *Walnut*, a course scheduler Android app to help UofT students plan their classes more easily.

  <span id="projects-link-inside" style="cursor:pointer; text-decoration:underline;">>> More about projects</span>`
};

// text for “door” choice
export const doorPrompt = `
  <div style="margin-bottom: 1rem;">
    Do you want to explore inside the house or view a text version of the portfolio?
  </div>
  <strong><span id="opt-explore" style="cursor:pointer; text-decoration:underline;">
    [1] Explore inside the house
  </span></strong><br>
  <strong><span id="opt-text" style="cursor:pointer; text-decoration:underline;">
    [2] View text version
  </span></strong>
`;

// textPortfolio menu
export const portfolioMenu = `
      <h2>Elena Manneh</h2>
      <p>Hi—I’m Elena, a U of T Software Developer & Statistics student. I build AI-powered web apps, optimize F1 race strategies, and love clean React/Node code.</p>
      <hr/>
      <p>
        <span id="opt-edu" style="cursor:pointer; text-decoration:underline;">[1] Education</span><br/>
        <span id="opt-exp" style="cursor:pointer; text-decoration:underline;">[2] Experience</span><br/>
        <span id="opt-proj" style="cursor:pointer; text-decoration:underline;">[3] Projects</span>
      </p>
    `;

// Education & Experience scenes
export const educationContent = `
      <h2>Education</h2>
      <p>
        <strong>University of Toronto Scarborough</strong><br/>
        HBSc Computer Science, Information Systems Specialist
      </p>
    `;

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

// export import { android, c, css, figma, firebase, git, html, java, javascript, jira, mongodb, python, react, tex, asm, linux } from '../img/technologies-icons';

// At the bottom of src/constants.js

/** Heading for the Projects scene */
export const projectsHeader = `<h2>Projects</h2>`;

export const projects = [
  {
    id: 1,
    name: "Pursuiter Job Application Website",
    // languages: [
    //   { name: "MongoDB", icon: mongodb },
    //   { name: "React", icon: react },
    // ],
    description: [
      "Led a Scrum team of 4 to develop a full-stack job application website using the MERN stack.",
      "Integrated AI for tailored applicant feedback and implemented filters to ensure only qualified applicants can apply."

    ],
  },
  {
    id: 2,
    name: "Pintos Operating System",
    // languages: [
    //   { name: "C", icon: c },
    //   { name: "Linux", icon: linux },
    // ],
    description: [
      "Implemented priority scheduling and donation algorithms to improve thread scheduling and resource allocation.",
      "Provided support for user programs through system calls and argument passing.",
      "Designed virtual memory including virtual-to-physical mappings and algorithms for eviction and swapping.",
      "Implemented filesystem including inode structures and growing files."

    ],
  },
  {
    id: 4,
    name: "Stocks Social Network",
    languages: [
    ],
    description: [
      "Designed, optimized and implemented database for stock data including portfolios and lists.",
      "Implemented social networking features including friends, sharing lists and reviews."
    ],
    github: "https://github.com/Kalshone/CSCC43-Project"
  },
  {
    id: 4,
    name: "Walnut Course Scheduler",
    // languages: [
    //   { name: "Java", icon: java },
    //   { name: "Firebase", icon: firebase },
    //   { name: "Android", icon: android },
    // ],
    description: [
      "Designed an Android mobile app with user-friendly front-end interfaces in an Agile Scrum of 5.",
      "Integrated Firebase Realtime Database applied OOP and SOLID principles for efficient back-end development."
    ],
    github: "https://github.com/b07boys/walnut"
  },
  {
    id: 5,
    name: "System Monitoring Tool",
    // languages: [
    //   { name: "Linux", icon: linux },
    //   { name: "C", icon: c },
    // ],
    description: [
      "Developed a real-time system monitoring tool with concurrent queries for memory, CPU, and user connections.",
      "Utilized POSIX APIs for efficient system-level programming and pipes for communication and output sequencing.",
      "Implemented dynamic data visualization for metrics, and customization through command-line arguments."
    ],
  },
  {
    id: 6,
    name: "File Descriptor Monitoring Tool",
    // languages: [
    //   { name: "Linux", icon: linux },
    //   { name: "C", icon: c },
    // ],
    description: [
      "Implemented file descriptor monitoring tool using POSIX APIs by accessing `/proc` filesystem and linked lists for dynamic data management.",
      "Supported customizable output options through command-line argument and output in text and binary formats.",
    ],
  },
  {
    id: 7,
    name: "Escape the Ghost",
    // languages: [
    //   { name: "Assembly", icon: asm },
    // ],
    description: [
      "Developed an interactive game with player movement mechanics, platform interactions, and gravity effects.",
      "Implemented collision-based outcomes, including game-over scenarios and victories.",
      "Designed multiple gameplay modes, with distinct behaviors, enhancing user engagement."
    ],
    github: "https://github.com/elenamanneh/Escape-the-Ghost"
  },
  {
    id: 8,
    name: "Reinforcement Learning in Gridworld",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Adjusted parameters (discount factor, learning rate) to study behavioral changes and strategy effectiveness.",
      "Enhanced performance by refining strategies through learning from interactions within dynamic environments.",
      "Adjusted parameters (discount factor, learning rate) to study behavioral changes and strategy effectiveness."
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/reinforcement"
  },
  {
    id: 9,
    name: "Ghost Tracking in Pacman",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Implemented inference algorithms, including Bayesian networks and particle filters, to analyze noisy distance readings for precise ghost localization.",
      "Enhanced gameplay through dynamic ghost movement predictions, significantly improving agent adaptability and performance in complex environments.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/tracking"
  },
  {
    id: 10,
    name: "Search Algorithms in Pacman",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Implemented classic search algorithms (UCS, A*) to navigate Pacman through complex mazes efficiently.",
      "Designed and optimized heuristic functions to enhance search performance and ensure optimal pathfinding.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/search"
  },
  {
    id: 11,
    name: "Multi-Agent Strategies in Pacman",
    // languages: [
    //   { name: "Python", icon: python },
    // ],
    description: [
      "Developed multi-agent strategies using Minimax, Alpha-Beta Pruning, and Expectimax for adversarial and cooperative agents.",
      "Optimized algorithms and developed evaluation functions to assess game states and agent decisions.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/multiagent"
  },
  {
    id: 12,
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
    id: 13,
    name: "Quadtree Image Decomposition",
    // languages: [
    //   { name: "C", icon: c },
    // ],
    description: [
      "Implemented image decomposition program in C, leveraging binary tree ADT for efficient data management.",
      "Enabled image loading and essential processing operations, including pixel management.",
      "•	Developed region splitting algorithm based on color similarity and user-defined threshold."
    ],
    github: "https://github.com/elenamanneh/SimplifiedQuadtree"
  },
];

export const contactContent = `
  <div id="contact-box" style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
    text-align: center;
  ">
    <h2>Contact Me</h2>
    <p>Email: elena.manneh@mail.utoronto.ca</p>
    <p>
      LinkedIn:
      <a href="https://linkedin.com/in/elenamanneh" target="_blank">
        linkedin.com/in/elenamanneh
      </a>
    </p>
    <p>
      GitHub:
      <a href="https://github.com/elenamanneh" target="_blank">
        github.com/elenamanneh
      </a>
    </p>
  </div>
`;

/** Standard “press Escape to return” prompt */
export const returnPrompt = `<p><em>Press Escape to return</em></p>`;
