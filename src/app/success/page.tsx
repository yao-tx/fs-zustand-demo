import { Header } from "../../components/Header";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 p-8 sm:p-20 pb-20">
        <main className="flex flex-col row-start-2">
          <h1 className="text-2xl lg:text-3xl font-bold mb-8">Thank you for your purchase!</h1>
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </main>
      </div>
    </div>
  )
}