"use client"

import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { useFastSpringStore } from "../stores/fastSpringStore";

export function ProductList() {
  const products = useFastSpringStore((state) => state.products);

  const addProduct = (path: string) => {
    if (typeof window !== "undefined" && window.fastspring && window.fastspring.builder) {
      window.fastspring.builder.push({
        products: [{
          path,
          quantity: 1,
        }]
      });
    }
  }

  return (
    <>
    {products.map((product) => {
      return (
        <Card key={product.path}>
          <CardHeader>
            <img src={product.image} className="h-auto w-full" />
          </CardHeader>
          <CardContent className="text-center">
            <h2 className="font-bold text-xl">{product.display}</h2>
            <p>{product.unitPrice}</p>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => addProduct(product.path)}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      )
    })}
    </>
  );
}