// GitHub repository links for projects
// This file centralizes all GitHub links for easier maintenance and scalability

interface GitHubLink {
  projectId: string;
  repoUrl: string;
}

const githubLinks: Record<string, string> = {
  // AI Projects
  "formula1-chatbot": "https://github.com/Bleedingmetal/f1nab_hackumass",
  
  // Simulation Projects
  "buoyancy-simulator": "https://github.com/Bleedingmetal/Extended-essay-code",
  
  // Competition Projects
  "battlecode": "https://github.com/Bleedingmetal/battlecode",
  
  // Add more projects as needed
};

export default githubLinks;
