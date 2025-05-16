"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, CheckCircle } from "lucide-react"
import { PaymentForm } from "@/components/payment-form"

// Mock data for nominees
const nomineeData = {
  "most-influential": {
    1: { name: "Adewale Johnson", department: "Computer Science", year: "400 Level" },
    2: { name: "Funke Adeyemi", department: "Medicine", year: "500 Level" },
    // Other nominees...
  },
  "academic-excellence": {
    1: { name: "Oluwaseun Adebayo", department: "Medicine", year: "400 Level" },
    2: { name: "Chinedu Eze", department: "Engineering", year: "500 Level" },
    // Other nominees...
  },
  // Other categories...
}

const categoryNames = {
  "most-influential": "Most Influential Student",
  "academic-excellence": "Academic Excellence",
  // Other category names...
}

export default function VotePage({ params }: { params: { categoryId: string; nomineeId: string } }) {
  const { categoryId, nomineeId } = params
  const [voteSubmitted, setVoteSubmitted] = useState(false)
  const [showPayment, setShowPayment] = useState(false)

  // Get nominee data
  const nominee =
    nomineeData[categoryId as keyof typeof nomineeData]?.[
      Number.parseInt(nomineeId) as keyof (typeof nomineeData)[keyof typeof nomineeData]
    ]
  const categoryName = categoryNames[categoryId as keyof typeof categoryNames] || "Category"

  const handleVoteClick = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    setVoteSubmitted(true)
    setShowPayment(false)
  }

  if (!nominee) {
    return (
      <div className="flex min-h-screen flex-col">

        <main className="flex-1 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Nominee Not Found</CardTitle>
              <CardDescription>The nominee you are looking for does not exist.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/categories" className="w-full">
                <Button className="w-full">Back to Categories</Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Trophy className="h-5 w-5 text-primary" />
            <Link href="/">LAUTECH Awards</Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="/results" className="text-sm font-medium">
              Results
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 flex items-center justify-center">
        <div className="container px-4 md:px-6 max-w-md">
          {voteSubmitted ? (
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <CardTitle className="text-center">Vote Submitted!</CardTitle>
                <CardDescription className="text-center">
                  Thank you for voting for {nominee.name} in the {categoryName} category.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-4">
                <Link href={`/categories/${categoryId}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    Back to Category
                  </Button>
                </Link>
                <Link href="/categories" className="w-full">
                  <Button className="w-full">Vote in Another Category</Button>
                </Link>
              </CardFooter>
            </Card>
          ) : showPayment ? (
            <Card>
              <CardHeader>
                <CardTitle>Payment for Vote</CardTitle>
                <CardDescription>
                  Complete your payment to confirm your vote for {nominee.name} in the {categoryName} category.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PaymentForm onSuccess={handlePaymentSuccess} />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => setShowPayment(false)}>
                  Cancel
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
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
                <CardTitle className="text-center">{nominee.name}</CardTitle>
                <CardDescription className="text-center">
                  {nominee.department}, {nominee.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <p className="font-medium">Category: {categoryName}</p>
                </div>
                <p className="text-center text-muted-foreground">
                  You are about to vote for this nominee. A small fee of ₦100 will be charged to confirm your vote.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" onClick={handleVoteClick}>
                  Proceed to Payment
                </Button>
                <Link href={`/categories/${categoryId}`}>
                  <Button variant="outline" className="w-full">
                    Cancel
                  </Button>
                </Link>
              </CardFooter>
            </Card>
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
