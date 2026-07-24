import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import ActionButtons from "@/components/ActionButtons";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="liquid-glass-bg" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-start gap-6 px-5 pt-6 pb-8">
        <Hero />

        <div className="flex w-full flex-col items-center gap-3">
          <div className="w-[93%] mx-auto">
            <VideoPlayer />
          </div>
          <ActionButtons />
        </div>

        <InfoCards />

        <Footer />
      </div>
    </main>
  );
}
