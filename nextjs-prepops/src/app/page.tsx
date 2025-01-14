import Features from "@/components/landing/feature";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";

export default async function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
