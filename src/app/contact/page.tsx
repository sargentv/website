"use client";

import { useState } from "react";

export default function ContactPage() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission (dummy function for static site)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log({ name, email, subject, message });
    setSubmitted(true);
    // Reset the form after 3 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="text-muted-foreground mb-4">
            Feel free to reach out if you have any questions, project proposals, or would like to discuss cybersecurity topics. I'll get back to you as soon as possible.
          </p>

          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex items-center">
              <span className="font-bold mr-2">Email:</span>
              <a href="mailto:contact@alexjohnson-cyber.com" className="text-accent hover:underline">
                contact@alexjohnson-cyber.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-bold mr-2">Location:</span>
              <span className="text-muted-foreground">San Francisco, California</span>
            </div>
          </div>
        </div>

        <div className="border border-accent/20 rounded-md p-6 bg-card">
          <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>

          {submitted ? (
            <div className="bg-green-900/20 border border-green-900/30 text-green-400 p-4 rounded-md">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 bg-background border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 bg-background border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="w-full p-2 bg-background border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full p-2 bg-background border border-accent/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
