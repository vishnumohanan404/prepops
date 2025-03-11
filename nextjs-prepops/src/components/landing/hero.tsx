"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/dashboard");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),hsl(var(--primary)/0.05)_15%,hsl(var(--primary)/0)_80%)] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent -z-10" />

      <nav className="absolute top-0 w-full flex justify-between items-center p-6">
        <Image
          src={"/logo-base-256x256.png"}
          width={32}
          height={32}
          alt="logo"
        ></Image>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {/* <Button variant="ghost">Sign In</Button> */}
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
        >
          PrepOps
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl"
        >
          <p>
            Transform your DevOps/Cloud interview preparation with comprehensive
            quizzes, cheatsheets, and real-world scenarios. Let AI guide your
            learning journey.
          </p>
          <Button
            size="lg"
            className="mt-8 rounded-full"
            onClick={handleNavigate}
          >
            Get started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative w-full max-w-4xl mx-auto"
        >
          {/* <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg overflow-hidden"> */}
            {/* <div className="absolute inset-0 bg-white/10" /> */}
            <Image src={'/hero.png'} alt="hero" width={896} height={504} objectFit={""}/>
          {/* </div> */}
          <div className="my-8 flex flex-col items-center">
            {/* <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"
                />
              ))}
            </div> */}
            <p className="mt-4 text-sm text-muted-foreground">
              Join 50+ developers preparing for interviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
