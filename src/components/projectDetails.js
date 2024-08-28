import { android, c, css, figma, firebase, git, html, java, javascript, jira, mongodb, python, react, tex, asm, linux } from '../img/technologies-icons';

const projects = [
  {
    id: 1,
    name: "Pursuiter Job Application Website",
    languages: [
      { name: "MongoDB", icon: mongodb },
      { name: "React", icon: react },
    ],
    description: [
      "Led a Scrum team of 4 to develop a full-stack job application website using the MERN stack.",
      "Integrated AI for tailored applicant feedback and implemented filters to ensure only qualified applicants can apply."

    ],
  },
  {
    id: 2,
    name: "Pintos Operating System",
    languages: [
      { name: "C", icon: c },
      { name: "Linux", icon: linux },
    ],
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
    languages: [
      { name: "Java", icon: java },
      { name: "Firebase", icon: firebase },
      { name: "Android", icon: android },
    ],
    description: [
      "Designed an Android mobile app with user-friendly front-end interfaces in an Agile Scrum of 5.",
      "Integrated Firebase Realtime Database applied OOP and SOLID principles for efficient back-end development."
    ],
    github: "https://github.com/b07boys/walnut"
  },
  {
    id: 5,
    name: "System Monitoring Tool",
    languages: [
      { name: "Linux", icon: linux },
      { name: "C", icon: c },
    ],
    description: [
      "Developed a real-time system monitoring tool with concurrent queries for memory, CPU, and user connections.",
      "Utilized POSIX APIs for efficient system-level programming and pipes for communication and output sequencing.",
      "Implemented dynamic data visualization for metrics, and customization through command-line arguments."
    ],
  },
  {
    id: 6,
    name: "File Descriptor Monitoring Tool",
    languages: [
      { name: "Linux", icon: linux },
      { name: "C", icon: c },
    ],
    description: [
      "Implemented file descriptor monitoring tool using POSIX APIs by accessing `/proc` filesystem and linked lists for dynamic data management.",
      "Supported customizable output options through command-line argument and output in text and binary formats.",
    ],
  },
  {
    id: 7,
    name: "Escape the Ghost",
    languages: [
      { name: "Assembly", icon: asm },
    ],
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
    languages: [
      { name: "Python", icon: python },
    ],
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
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Implemented inference algorithms, including Bayesian networks and particle filters, to analyze noisy distance readings for precise ghost localization.",
      "Enhanced gameplay through dynamic ghost movement predictions, significantly improving agent adaptability and performance in complex environments.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/tracking"
  },
  {
    id: 10,
    name: "Search Algorithms in Pacman",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Implemented classic search algorithms (UCS, A*) to navigate Pacman through complex mazes efficiently.",
      "Designed and optimized heuristic functions to enhance search performance and ensure optimal pathfinding.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/search"
  },
  {
    id: 11,
    name: "Multi-Agent Strategies in Pacman",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Developed multi-agent strategies using Minimax, Alpha-Beta Pruning, and Expectimax for adversarial and cooperative agents.",
      "Optimized algorithms and developed evaluation functions to assess game states and agent decisions.",
    ],
    github: "https://github.com/elenamanneh/pacmanProjects/tree/main/multiagent"
  },
  {
    id: 12,
    name: "Graffit Social Networking Platform",
    languages: [
      { name: "C", icon: c },
    ],
    description: [
      "Created standalone social networking platform with recommendation system.",
      "Utilized graph ADT for efficient user relationship modeling.",
    ],
  },

  {
    id: 13,
    name: "Quadtree Image Decomposition",
    languages: [
      { name: "C", icon: c },
    ],
    description: [
      "Implemented image decomposition program in C, leveraging binary tree ADT for efficient data management.",
      "Enabled image loading and essential processing operations, including pixel management.",
      "•	Developed region splitting algorithm based on color similarity and user-defined threshold."
    ],
    github: "https://github.com/elenamanneh/SimplifiedQuadtree"
  },
];

export default projects;
