import { android, c, css, figma, firebase, git, html, java, javascript, jira, mongodb, python, react, tex, asm, linux } from '../img/technologies-icons';

const projects = [
  {
    id: 1,
    name: "Pursuiter Job Application Website",
    languages: [
      { name: "MongoDB", icon: mongodb },
      { name: "MongoDB", icon: mongodb },
      { name: "React", icon: react },
      { name: "Android", icon: android },
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
    id: 3,
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
  },
  {
    id: 4,
    name: "Stocks Social Network",
    languages: [
      { name: "Java", icon: java },
      { name: "Firebase", icon: firebase },
      { name: "Android", icon: android },
    ],
    description: [
      "Designed an Android mobile app with user-friendly front-end interfaces in an Agile Scrum of 5.",
      "Integrated Firebase Realtime Database applied OOP and SOLID principles for efficient back-end development."
    ],
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
    name: "Reinforcement Learning in Gridworld",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Adjusted parameters (discount factor, learning rate) to study behavioral changes and strategy effectiveness.",
      "Enhanced performance by refining strategies through learning from interactions within dynamic environments.",
      "Adjusted parameters (discount factor, learning rate) to study behavioral changes and strategy effectiveness."
    ],
  },
  {
    id: 8,
    name: "AI-Based Search and Multi-Agent Strategies in Pacman",
    languages: [
      { name: "Python", icon: python },
    ],
    description: [
      "Implemented search algorithms (UCS, A*) and multi-agent strategies (Minimax, Alpha-Beta Pruning, Expectimax).",
      "Optimized algorithms and developed an evaluation function for assessing game states and agent decisions.",
    ],
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
  },
  {
    id: 10,
    name: "Escape the Ghost",
    languages: [
      { name: "Assembly", icon: asm },
    ],
    description: [
      "Developed an interactive game with player movement mechanics, platform interactions, and gravity effects.",
      "Implemented collision-based outcomes, including game-over scenarios and victories.",
      "Designed multiple gameplay modes, with distinct behaviors, enhancing user engagement."
    ],
  },
  {
    id: 11,
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
    id: 12,
    name: "Quadtree Image Decomposition",
    languages: [
      { name: "C", icon: c },
    ],
    description: [
      "Implemented image decomposition program in C, leveraging binary tree ADT for efficient data management.",
      "Enabled image loading and essential processing operations, including pixel management.",
      "•	Developed region splitting algorithm based on color similarity and user-defined threshold."
    ],
  },
];

export default projects;
