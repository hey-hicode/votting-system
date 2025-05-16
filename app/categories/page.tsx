import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

// Mock data for award categories
const categories = [
  {
    id: "most-influential",
    title: "Most Influential Student",
    description: "Students who have made significant impact on campus",
    nominees: 8,
  },
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    description: "Students with outstanding academic achievements",
    nominees: 10,
  },
  {
    id: "sports-personality",
    title: "Sports Personality",
    description: "Outstanding athletes who have represented the school",
    nominees: 12,
  },
  {
    id: "creative-arts",
    title: "Creative Arts Star",
    description: "Students excelling in arts, music, drama, and creative fields",
    nominees: 9,
  },
  {
    id: "community-service",
    title: "Community Service Award",
    description: "Students who have contributed to community development",
    nominees: 7,
  },
  {
    id: "innovation",
    title: "Innovation & Entrepreneurship",
    description: "Students with remarkable innovative projects or businesses",
    nominees: 6,
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
    
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Award Categories</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Browse through the different award categories and vote for your favorite nominees.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.nominees} nominees in this category</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/categories/${category.id}`} className="w-full">
                    <Button className="w-full">View Nominees</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
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
