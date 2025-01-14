import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © 2025 PrepOps. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
