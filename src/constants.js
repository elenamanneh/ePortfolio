export const scaleFactor = 4;

export const dialogueData = {
  desk: `This is my PC. I work mostly in JavaScript/TypeScript these days.
    I've made a couple of games in that language. I also like Golang and Python. Anyway regardless of the language, I just like programming.
    Here is my <a href="https://github.com/jslegenddev" target="_blank">Github</a>!`,
  "cs-degree": `This is my CS degree. I hung it on the wall because I'm proud of it. It was a very theoretical degree but I think it gave me a good foundation.`,
  "sofa-table": `That's my sofa. I like to relax here and watch YouTube. 
  I also make game programming tutorials on YouTube. Go sub to <a href="https://youtube.com/@jslegenddev" target="_blank">my channel</a>! (If you like the content)
  You'll learn how I built this portfolio you're currently playing through!`,
  tv: `That's my TV. I've been watching tech youtubers a lot recently like :
   <a href="https://www.youtube.com/@ThePrimeTimeagen" target="_blank">Theprimeagen</a>, <a href="https://www.youtube.com/@t3dotgg" target="_blank">Theo - t3.gg</a>,
  <a href="https://www.youtube.com/@PirateSoftware" target="_blank">PirateSoftware</a> (sometimes) and <a href="https://www.youtube.com/@MelkeyDev" target="_blank">Melkey</a>!`,
  kitchen: `This where I sleep. Great ideas comes when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`,
  resume: `This is my desk and on it is my resume. <a href="https://github.com/JSLegendDev/Resume/blob/main/JSLegend%20Resume-1.pdf" target="_blank">Check it out?</a>
  Contact me at jslegend@protonmail.com if you have any interesting job opportunities!`,
  projects: `Info about this portfolio : It's made with the Kaboom.js library which is a library for making games in JavaScript.
  Text is rendered with HTML/CSS. So the textbox you're currently reading is not rendered within canvas. Learn more about how to use
  Kaboom.js by watching some of my tutorials <a href="https://youtube.com/@jslegenddev" target="_blank">here</a>.`,
  bookshelf: `There are a lot of programming books on my shelves. There is even one in French (I also speak French btw).
  I probably only read one of them. Who else compulsively buys technical books without ever finishing them?`,
  exit: `If you want to exit JSLegendDev's portfolio, just close the tab.`,
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
  <div style="
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
