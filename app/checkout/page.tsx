"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Lock,
  CreditCard,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Smartphone,
  Wallet,
} from "lucide-react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId") || "1";
  const quantity = parseInt(searchParams.get("quantity") || "1");

  const product = getProductById(productId);

  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "wallet">("wallet");
  const [selectedWallet, setSelectedWallet] = useState("PayPal");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const [showSuspiciousPopup, setShowSuspiciousPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[80dvh] flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-bold text-gray-900">Product not found</h1>
        <Link href="/">
          <Button className="mt-4">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const total = product.price * quantity;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuspiciousPopup(true);
  };

  const handleContinuePayment = () => {
    setShowSuspiciousPopup(false);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessPopup(true);
    }, 1500);
  };

  return (
    <div className="min-h-[100dvh] bg-white flex flex-col">
      {/* Mobile App Header */}
      <header className="sticky top-0 z-50 bg-white border-b px-4 py-4 flex items-center gap-3">
        <Link href={`/product/${product.id}`} className="p-2 -ml-2 hover:bg-gray-100 rounded-full active:scale-95 transition-transform">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-lg font-semibold">Payment</h1>
      </header>

      <div className="flex-1 flex flex-col">
        {/* Product Summary - Compact */}
        <div className="p-4 bg-gray-50 border-b">
          <div className="flex gap-3 items-center">
            <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-white border flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-sm line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">Qty: {quantity}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                ₹{total.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePayment} className="flex-1 flex flex-col p-4">
          <div className="space-y-5 flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Lock className="h-4 w-4 text-green-600" />
              <span>Secure payment</span>
            </div>

            {/* Payment Method Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-gray-100 rounded-xl">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`py-3 rounded-lg font-semibold text-sm transition-all ${
                  paymentMethod === "card"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <CreditCard className="h-4 w-4 mx-auto mb-1" />
                Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("upi")}
                className={`py-3 rounded-lg font-semibold text-sm transition-all ${
                  paymentMethod === "upi"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Smartphone className="h-4 w-4 mx-auto mb-1" />
                UPI
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("wallet")}
                className={`py-3 rounded-lg font-semibold text-sm transition-all ${
                  paymentMethod === "wallet"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Wallet className="h-4 w-4 mx-auto mb-1" />
                Wallet
              </button>
            </div>

            {/* Card Payment */}
            {paymentMethod === "card" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-sm font-semibold text-gray-700">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="h-14 text-base pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      inputMode="numeric"
                    />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="text-sm font-semibold text-gray-700">Expiry</Label>
                    <Input
                      id="expiry"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      required
                      className="h-14 text-base text-center rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      inputMode="numeric"
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-sm font-semibold text-gray-700">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="h-14 text-base text-center rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      inputMode="numeric"
                      maxLength={4}
                      type="password"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  {["Visa", "Mastercard", "Amex"].map((brand) => (
                    <div
                      key={brand}
                      className="px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-semibold text-gray-600"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* UPI Payment */}
            {paymentMethod === "upi" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="upiId" className="text-sm font-semibold text-gray-700">UPI ID</Label>
                  <div className="relative">
                    <Input
                      id="upiId"
                      name="upiId"
                      placeholder="yourname@upi"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      required
                      className="h-14 text-base pl-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 pt-2">
                  <button
                    type="button"
                    className="aspect-square rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 flex items-center justify-center p-3 active:scale-95 transition-all shadow-sm hover:shadow-md"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="w-full h-full object-contain" />
                  </button>
                  <button
                    type="button"
                    className="aspect-square rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 flex items-center justify-center p-2.5 active:scale-95 transition-all shadow-sm hover:shadow-md"
                  >
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/PhonePe-Symbol.png" alt="PhonePe" className="w-full h-full object-contain" />
                  </button>
                  <button
                    type="button"
                    className="aspect-square rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 flex items-center justify-center p-2.5 active:scale-95 transition-all shadow-sm hover:shadow-md"
                  >
                    <img src="https://companieslogo.com/img/orig/PAYTM.NS-b6bc5926.png" alt="Paytm" className="w-full h-full object-contain" />
                  </button>
                  <button
                    type="button"
                    className="aspect-square rounded-xl bg-white border-2 border-gray-200 hover:border-blue-500 flex items-center justify-center p-3 active:scale-95 transition-all shadow-sm hover:shadow-md"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Pay" className="w-full h-full object-contain" />
                  </button>
                </div>
              </div>
            )}

            {/* Wallet Payment */}
            {paymentMethod === "wallet" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="space-y-3">
                  {[
                    { name: "PayPal", desc: "Balance: ₹2,03,325", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", hasBalance: true },
                    { name: "Apple Pay", desc: "Balance: ₹1,51,100", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg", hasBalance: true },
                    { name: "Google Pay", desc: "Link account", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg", hasBalance: false },
                    { name: "Amazon Pay", desc: "Link account", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", hasBalance: false },
                  ].map((wallet) => (
                    <button
                      key={wallet.name}
                      type="button"
                      onClick={() => setSelectedWallet(wallet.name)}
                      className={`w-full p-4 rounded-xl bg-white font-semibold text-left flex items-center gap-4 active:scale-[0.98] transition-all shadow-sm hover:shadow-md ${
                        selectedWallet === wallet.name
                          ? "border-2 border-blue-600 ring-2 ring-blue-100"
                          : "border-2 border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="h-10 w-16 flex items-center justify-center flex-shrink-0">
                        <img src={wallet.logo} alt={wallet.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{wallet.name}</div>
                        <div className={`text-sm font-semibold mt-0.5 ${
                          wallet.hasBalance ? "text-green-600" : "text-blue-600"
                        }`}>
                          {wallet.desc}
                        </div>
                      </div>
                      {selectedWallet === wallet.name ? (
                        <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Pay Button - Fixed */}
          <div className="pt-6 pb-2">
            <Separator className="mb-4" />
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Total</span>
              <span className="text-2xl font-bold">₹{total.toLocaleString()}</span>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white h-16 text-lg font-bold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-600/25"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Pay ₹{total.toLocaleString()}</>
              )}
            </Button>
          </div>
        </form>
      </div>

      {/* Suspicious Activity Popup */}
      <Dialog open={showSuspiciousPopup} onOpenChange={setShowSuspiciousPopup}>
        <DialogContent className="max-w-[90vw] sm:max-w-md rounded-3xl p-0 gap-0 border-0 shadow-2xl">
          <div className="p-8 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center mb-6 shadow-lg">
              <AlertTriangle className="h-12 w-12 text-orange-600" strokeWidth={2.5} />
            </div>
            <DialogHeader className="space-y-4">
              <DialogTitle className="text-3xl font-extrabold text-center text-gray-900 tracking-tight leading-tight">
                Suspicious Activity!
              </DialogTitle>
              <p className="text-gray-600 text-lg font-medium">
                Continue payment?
              </p>
            </DialogHeader>
          </div>

          <div className="px-6 pb-6 pt-0 space-y-3">
            <Button
              onClick={handleContinuePayment}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl text-base font-bold active:scale-[0.98] transition-all shadow-lg"
            >
              Continue Payment
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowSuspiciousPopup(false)}
              className="w-full h-14 rounded-xl text-base font-bold active:scale-[0.98] transition-all border-2"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent className="max-w-[90vw] sm:max-w-md rounded-2xl p-0 gap-0">
          <div className="p-6 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold text-center">
                Payment Successful!
              </DialogTitle>
              <p className="text-gray-600">
                Your order has been placed.
              </p>
            </DialogHeader>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl text-left">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order ID</span>
                  <span className="font-medium font-mono">#{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-semibold">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <Link href="/" className="block">
              <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold active:scale-[0.98] transition-all">
                Done
              </Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[100dvh] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
