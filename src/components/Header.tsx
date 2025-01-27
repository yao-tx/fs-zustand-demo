"use client"

import Link from "next/link";
import { Button } from "../components/ui/button";
import { Book, ShoppingBag } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { useFastSpringStore } from "@/stores/fastSpringStore";

export function Header() {
  const data = useFastSpringStore((state) => state.data);

  const handleCartButton = () => {
    window.fastspring?.builder.checkout();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between m-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-50" prefetch={false}>
          <Book className="h-6 w-6" />
          <span>Acme Store</span>
        </Link>
        <NavigationMenu className="w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={handleCartButton} data-fsc-action="Checkout">
                <ShoppingBag className="w-4 h-4 mr-1" />Cart { data?.originalTotal ? `(${data.originalTotal})` : "" }
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}