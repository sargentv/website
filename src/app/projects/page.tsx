export default function ProjectsPage() {
  // Define projects
  const projects = [
    {
      title: "Enterprise SIEM Implementation",
      timeline: "2022 - 2023",
      description: "Led a cross-functional team in implementing a next-generation Security Information and Event Management (SIEM) system across a global organization with 10,000+ endpoints. Integrated with multiple security tools and developed custom dashboards for real-time threat monitoring.",
      technologies: ["Splunk", "Python", "PowerShell", "AWS"]
    },
    {
      title: "Vulnerability Management Program",
      timeline: "2021 - 2022",
      description: "Designed and implemented a comprehensive vulnerability management program for a financial services company. Created automated workflows for vulnerability scanning, prioritization, and remediation tracking that reduced the mean time to remediate critical vulnerabilities by 45%.",
      technologies: ["Tenable Nessus", "Jira", "Python", "GitHub Actions"]
    },
    {
      title: "Cloud Security Framework",
      timeline: "2020 - 2021",
      description: "Developed a comprehensive security framework for cloud environments (AWS, Azure, GCP) that ensured compliance with industry standards while enabling developer productivity. Implemented infrastructure as code for security controls and continuous compliance monitoring.",
      technologies: ["Terraform", "CloudFormation", "Docker", "Kubernetes", "Go"]
    },
    {
      title: "Security Awareness Training Platform",
      timeline: "2019 - 2020",
      description: "Created an interactive security awareness training platform using gamification principles to increase employee engagement. The platform included simulated phishing exercises, microlearning modules, and a leaderboard system that increased training completion rates by 78%.",
      technologies: ["React", "Node.js", "MongoDB", "Docker"]
    }
  ];

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="border border-accent/20 rounded-md p-6 bg-card">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <span className="text-muted-foreground">{project.timeline}</span>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
