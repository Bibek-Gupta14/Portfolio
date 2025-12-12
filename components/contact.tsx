"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const { ref, isInView } = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("biplabgupta50@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Contact
          </h2>
          <p className="text-2xl md:text-3xl text-foreground mb-12 text-balance">
            If you would like to discuss a project or just say hi, I'm always
            down to chat.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <button
                    onClick={copyEmail}
                    className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    biplabgupta50@gmail.com
                    {copied ? (
                      <Check size={16} className="text-primary" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">+91 9366116909</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Meghalaya, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                Connect with me
              </h3>
              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="flex-1 border-border hover:border-primary hover:text-secondary bg-transparent"
                >
                  <a
                    href="www.linkedin.com/in/bibekgupta14"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2" size={18} />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="flex-1 border-border hover:border-primary hover:text-secondary bg-transparent"
                >
                  <a
                    href="https://github.com/bibek-Gupta14"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2" size={18} />
                    GitHub
                  </a>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="mailto:biplabgupta50@gmail.com" target="_blank">
                  <Mail className="mr-2" size={18} />
                  Send me an email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
