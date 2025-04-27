import Image from "next/image";

export default function SkillsPage() {
  // Define the skill categories with their respective icons and skills
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: "https://ext.same-assets.com/2643731439/2717579240.svg",
      skills: [
        "Security Information and Event Management (SIEM)",
        "Intrusion Detection/Prevention Systems (IDS/IPS)",
        "Firewall Management and Network Security",
        "Vulnerability Assessment and Penetration Testing",
        "Cloud Security (AWS, Azure, GCP)",
        "Endpoint Detection and Response (EDR)",
        "Security Orchestration, Automation and Response (SOAR)",
        "Threat Intelligence and Analysis"
      ]
    },
    {
      title: "Security Tools",
      icon: "https://ext.same-assets.com/2643731439/588424860.svg",
      skills: [
        "Splunk, ELK Stack, QRadar",
        "Wireshark, Tcpdump, Snort",
        "Nessus, Qualys, OpenVAS",
        "Metasploit, Burp Suite, OWASP ZAP",
        "CrowdStrike, Carbon Black, SentinelOne",
        "Nmap, Nikto, Aircrack-ng",
        "Security Onion, Kali Linux",
        "Terraform, Ansible, Docker"
      ]
    },
    {
      title: "Programming & Scripting",
      icon: "https://ext.same-assets.com/2643731439/614298017.svg",
      skills: [
        "Python",
        "Bash/Shell Scripting",
        "PowerShell",
        "SQL",
        "JavaScript",
        "Go",
        "Ruby",
        "Regex"
      ]
    },
    {
      title: "Compliance & Frameworks",
      icon: "https://ext.same-assets.com/2643731439/295222564.svg",
      skills: [
        "NIST Cybersecurity Framework",
        "ISO 27001/27002",
        "PCI DSS",
        "GDPR",
        "HIPAA",
        "SOC 2",
        "MITRE ATT&CK Framework",
        "CIS Benchmarks"
      ]
    },
    {
      title: "Infrastructure",
      icon: "https://ext.same-assets.com/2643731439/2140072715.svg",
      skills: [
        "Windows Server Administration",
        "Linux Administration",
        "Active Directory",
        "Cloud Platforms (AWS, Azure, GCP)",
        "Networking (TCP/IP, Routing, VPN)",
        "Virtualization (VMware, Hyper-V)",
        "Containerization (Docker, Kubernetes)",
        "Identity and Access Management"
      ]
    },
    {
      title: "Security Specialties",
      icon: "https://ext.same-assets.com/2643731439/953243697.svg",
      skills: [
        "Incident Response",
        "Digital Forensics",
        "Malware Analysis",
        "Threat Hunting",
        "Security Architecture",
        "Social Engineering",
        "Red Team Operations",
        "Blue Team Operations"
      ]
    }
  ];

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Skills & Expertise</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="border border-accent/20 rounded-md p-6 bg-card">
            <div className="flex items-center mb-4">
              <Image
                src={category.icon}
                alt={`${category.title} icon`}
                width={22}
                height={22}
                className="mr-3"
              />
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className="text-muted-foreground">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
