import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { Progress } from "@/components/ui/progress"

// Mock data for results
const resultsData = [
  {
    category: "Most Influential Student",
    nominees: [
      { id: 1, name: "Adewale Johnson", department: "Computer Science", votes: 245, percentage: 22 },
      { id: 2, name: "Funke Adeyemi", department: "Medicine", votes: 189, percentage: 17 },
      { id: 3, name: "Ibrahim Olatunji", department: "Engineering", votes: 176, percentage: 16 },
      { id: 4, name: "Chioma Nwosu", department: "Law", votes: 154, percentage: 14 },
      { id: 5, name: "Emeka Okafor", department: "Business Admin", votes: 132, percentage: 12 },
    ],
  },
  {
    category: "Academic Excellence",
    nominees: [
      { id: 1, name: "Oluwaseun Adebayo", department: "Medicine", votes: 178, percentage: 24 },
      { id: 2, name: "Chinedu Eze", department: "Engineering", votes: 165, percentage: 22 },
      { id: 3, name: "Amina Ibrahim", department: "Computer Science", votes: 142, percentage: 19 },
      { id: 4, name: "Tunde Bakare", department: "Physics", votes: 136, percentage: 18 },
      { id: 5, name: "Grace Okafor", department: "Biochemistry", votes: 124, percentage: 17 },
    ],
  },
  {
    category: "Sports Personality",
    nominees: [
      { id: 1, name: "David Okonkwo", department: "Physical Education", votes: 210, percentage: 28 },
      { id: 2, name: "Blessing Okagbare", department: "Sports Science", votes: 185, percentage: 25 },
      { id: 3, name: "Ahmed Musa", department: "Business Admin", votes: 160, percentage: 21 },
      { id: 4, name: "Chiamaka Nnadozie", department: "Economics", votes: 120, percentage: 16 },
      { id: 5, name: "Samuel Chukwueze", department: "Mass Comm", votes: 75, percentage: 10 },
    ],
  },
]

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Live Results</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See the current standings for each award category. Results are updated in real-time.
            </p>
          </div>

          <div className="space-y-12">
            {resultsData.map((result, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-bold">{result.category}</h2>
                <div className="grid gap-6">
                  {result.nominees.map((nominee, nIndex) => (
                    <Card key={nIndex} className={nIndex === 0 ? "border-primary" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={`/placeholder.svg?height=48&width=48&text=${nominee.name.charAt(0)}`}
                              alt={nominee.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {nominee.name}
                              {nIndex === 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                            </CardTitle>
                            <CardDescription>{nominee.department}</CardDescription>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{nominee.votes} votes</p>
                            <p className="text-sm text-muted-foreground">{nominee.percentage}%</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={nominee.percentage} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
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
