import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl mb-6 font-bold">
              A better way to record your job applications
            </h1>
            <p className="text-muted-foreground mb-10 text-4xl">
              Keep track of all your job applications in one place, with
              detailed notes and status updates.
            </p>
          </div>
          <div className=" flex flex-col items-center gap-4 text-center">
            <Button size="lg" className={"h-12 px-8 text-lg -font-medium"}>
              Start for free
            </Button>
            <p className="text-sm text-muted-foreground">
              Free forever. No credit card required.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
