import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Trophy, Users, Vote } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col">

      <main className="flex-1 ">
        <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className=" px-4 !w-full md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  LAUTECH Student Awards Voting System
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Vote for your favorite nominees across different award categories and celebrate excellence in our
                  campus.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/categories">
                  <Button size="lg" className="gap-1">
                    Start Voting <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/results">
                  <Button variant="outline" size="lg">
                    View Results
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 container mx-auto md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center text-center p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Vote className="h-6 w-6 text-primary" />
                </div>
                <CardContent className="flex flex-col items-center space-y-2 p-0">
                  <h3 className="text-xl font-bold">Easy Voting</h3>
                  <p className="text-muted-foreground">
                    Simple and secure voting process for all students to participate in the awards.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardContent className="flex flex-col items-center space-y-2 p-0">
                  <h3 className="text-xl font-bold">Multiple Categories</h3>
                  <p className="text-muted-foreground">
                    Vote across various award categories celebrating different talents and achievements.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardContent className="flex flex-col items-center space-y-2 p-0">
                  <h3 className="text-xl font-bold">Support Your Peers</h3>
                  <p className="text-muted-foreground">
                    Show support for your fellow students by voting and contributing to their recognition.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LAUTECH Student Awards. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
