"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Wallet } from "lucide-react"

interface PaymentFormProps {
  onSuccess: () => void
}

export function PaymentForm({ onSuccess }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    phoneNumber: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false)
      onSuccess()
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Label>Select Payment Method</Label>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4">
          <div>
            <RadioGroupItem value="card" id="card-payment" className="peer sr-only" />
            <Label
              htmlFor="card-payment"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CreditCard className="mb-3 h-6 w-6" />
              Card Payment
            </Label>
          </div>
          <div>
            <RadioGroupItem value="transfer" id="bank-transfer" className="peer sr-only" />
            <Label
              htmlFor="bank-transfer"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Wallet className="mb-3 h-6 w-6" />
              Bank Transfer
            </Label>
          </div>
        </RadioGroup>
      </div>

      {paymentMethod === "card" ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cardName">Name on Card</Label>
            <Input id="cardName" placeholder="John Doe" value={formData.cardName} onChange={handleChange} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" value={formData.expiryDate} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" value={formData.cvv} onChange={handleChange} required />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              placeholder="080XXXXXXXX"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm font-medium">Bank Transfer Instructions:</p>
            <p className="text-sm text-muted-foreground mt-2">1. Transfer ₦100 to the account below:</p>
            <div className="mt-2 space-y-1 text-sm">
              <p>
                <span className="font-medium">Bank:</span> LAUTECH Student Awards
              </p>
              <p>
                <span className="font-medium">Account Number:</span> 0123456789
              </p>
              <p>
                <span className="font-medium">Bank:</span> First Bank
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              2. Enter your phone number above and click "Complete Payment" to verify.
            </p>
          </div>
        </div>
      )}

      <div className="pt-2">
        <div className="rounded-md bg-muted p-4 mb-4">
          <div className="flex justify-between">
            <span>Vote Fee:</span>
            <span>₦100.00</span>
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Processing..." : "Complete Payment"}
        </Button>
      </div>
    </form>
  )
}
