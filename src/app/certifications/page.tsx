export default function CertificationsPage() {
  // Define certifications
  const certifications = [
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      organization: "ISC²",
      date: "2020",
      description: "Globally recognized certification demonstrating expertise in designing, implementing, and managing a best-in-class cybersecurity program."
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      organization: "EC-Council",
      date: "2019",
      description: "Demonstrates knowledge of hacking practices in network security, penetration testing, and identifying vulnerabilities in target systems."
    },
    {
      name: "CompTIA Security+",
      organization: "CompTIA",
      date: "2018",
      description: "Validates the baseline skills necessary to perform core security functions and pursue an IT security career."
    },
    {
      name: "Offensive Security Certified Professional (OSCP)",
      organization: "Offensive Security",
      date: "2017",
      description: "Hands-on certification that requires candidates to successfully attack and penetrate various live machines in a safe lab environment."
    },
    {
      name: "Certified Information Security Manager (CISM)",
      organization: "ISACA",
      date: "2016",
      description: "Focuses on information security governance, program development and management, incident management, and risk management."
    }
  ];

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Certifications</h1>

      <div className="space-y-8">
        {certifications.map((cert) => (
          <div key={cert.name} className="border border-accent/20 rounded-md p-6 bg-card">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h2 className="text-xl font-bold">{cert.name}</h2>
              <span className="text-muted-foreground">{cert.date}</span>
            </div>
            <h3 className="text-lg text-accent mb-2">{cert.organization}</h3>
            <p className="text-muted-foreground">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
