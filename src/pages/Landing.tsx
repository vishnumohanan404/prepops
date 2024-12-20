import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100 dark:from-teal-900 dark:to-cyan-900">
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600 dark:from-teal-200 dark:to-cyan-400">
              PrepOps
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
              Master DevOps, SRE, and Cloud interviews with comprehensive
              preparation tools.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
            >
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="py-6 w-full text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2023 PrepOps. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
