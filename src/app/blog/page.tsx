export default function BlogPage() {
  // Define blog posts
  const blogPosts = [
    {
      title: "The Future of Zero Trust Security in Enterprise Environments",
      date: "April 10, 2025",
      excerpt: "Zero Trust has become a cornerstone of modern security architecture, but its implementation comes with challenges. This post explores how organizations can effectively transition to a Zero Trust model while maintaining operational efficiency.",
      tags: ["Zero Trust", "Enterprise Security", "Architecture"]
    },
    {
      title: "Practical Approaches to Cloud Security Posture Management",
      date: "March 22, 2025",
      excerpt: "As organizations continue to migrate workloads to the cloud, maintaining a secure cloud posture becomes increasingly complex. This article outlines practical strategies for implementing effective cloud security posture management across multi-cloud environments.",
      tags: ["Cloud Security", "CSPM", "AWS", "Azure", "GCP"]
    },
    {
      title: "Defending Against Supply Chain Attacks: Lessons from Recent Incidents",
      date: "February 15, 2025",
      excerpt: "Recent high-profile supply chain attacks have demonstrated the devastating impact these threats can have. Learn the key strategies for identifying and mitigating risks in your software supply chain to protect your organization.",
      tags: ["Supply Chain", "Threat Intelligence", "Risk Management"]
    },
    {
      title: "Building an Effective Security Operations Center (SOC) on a Budget",
      date: "January 28, 2025",
      excerpt: "You don't need a massive budget to establish an effective security operations center. This post covers practical advice for setting up a SOC that delivers real security value while optimizing resource allocation.",
      tags: ["SOC", "Security Operations", "Budget Planning"]
    },
    {
      title: "The Convergence of DevOps and Security: Making DevSecOps Work",
      date: "December 12, 2024",
      excerpt: "DevSecOps represents the integration of security practices into the DevOps pipeline. This article explores how to overcome the cultural and technical challenges in implementing a true DevSecOps approach.",
      tags: ["DevSecOps", "DevOps", "Secure SDLC"]
    }
  ];

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div key={post.title} className="border border-accent/20 rounded-md p-6 bg-card">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <span className="text-muted-foreground">{post.date}</span>
            </div>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
