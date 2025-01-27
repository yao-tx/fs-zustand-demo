import Image from "next/image";
import { Header } from "../components/Header";
import { ProductList } from "../components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full container mx-auto">
        <div className="my-8">
          <h1 className="font-bold text-3xl text-center">Welcome to Acme Store</h1>
        </div>
        <main className="grid grid-cols-3 gap-4 w-full">
          <ProductList />
        </main>
      </div>
    </div>
  );
}
