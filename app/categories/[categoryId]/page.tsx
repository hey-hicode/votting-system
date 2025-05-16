import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

// Mock data for nominees
const categoryData = {
  "most-influential": {
    title: "Most Influential Student",
    description: "Students who have made significant impact on campus",
    nominees: [
      { id: 1, name: "Adewale Johnson", department: "Computer Science", year: "400 Level", votes: 245 },
      { id: 2, name: "Funke Adeyemi", department: "Medicine", year: "500 Level", votes: 189 },
      { id: 3, name: "Ibrahim Olatunji", department: "Engineering", year: "300 Level", votes: 176 },
      { id: 4, name: "Chioma Nwosu", department: "Law", year: "400 Level", votes: 154 },
      { id: 5, name: "Emeka Okafor", department: "Business Admin", year: "300 Level", votes: 132 },
      { id: 6, name: "Fatima Bello", department: "Biochemistry", year: "400 Level", votes: 128 },
      { id: 7, name: "David Okonkwo", department: "Economics", year: "300 Level", votes: 112 },
      { id: 8, name: "Aisha Mohammed", department: "Political Science", year: "200 Level", votes: 98 },
    ],
  },
  "academic-excellence": {
    title: "Academic Excellence",
    description: "Students with outstanding academic achievements",
    nominees: [
      { id: 1, name: "Oluwaseun Adebayo", department: "Medicine", year: "400 Level", votes: 178 },
      { id: 2, name: "Chinedu Eze", department: "Engineering", year: "500 Level", votes: 165 },
      { id: 3, name: "Amina Ibrahim", department: "Computer Science", year: "300 Level", votes: 142 },
      { id: 4, name: "Tunde Bakare", department: "Physics", year: "400 Level", votes: 136 },
      { id: 5, name: "Grace Okafor", department: "Biochemistry", year: "300 Level", votes: 124 },
    ],
  },
  // Other categories would be defined similarly
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params
  const category = categoryData[categoryId as keyof typeof categoryData] || {
    title: "Category Not Found",
    description: "This category does not exist",
    nominees: [],
  }

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Link href="/categories" className="text-sm text-muted-foreground hover:underline mb-2">
              ← Back to Categories
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{category.title}</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">{category.description}</p>
          </div>

          {category.nominees.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.nominees.map((nominee) => (
                <Card key={nominee.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-4">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=128&width=128&text=${nominee.name.charAt(0)}`}
                          alt={nominee.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <CardTitle>{nominee.name}</CardTitle>
                    <CardDescription>
                      {nominee.department}, {nominee.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Current votes: {nominee.votes}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/vote/${categoryId}/${nominee.id}`} className="w-full">
                      <Button className="w-full">Vote Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center p-12">
              <p>No nominees found for this category.</p>
            </div>
          )}
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
