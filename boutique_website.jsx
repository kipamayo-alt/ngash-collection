import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "254746962435";
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const products = [
  { id: 1, name: "Street Sneakers", category: "Shoes", gender: "Men", price: "KES 8,500", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
  { id: 2, name: "Urban Heels", category: "Shoes", gender: "Women", price: "KES 10,500", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id: 3, name: "Oversized Hoodie", category: "Clothes", gender: "Men", price: "KES 5,800", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { id: 4, name: "Denim Street Jacket", category: "Clothes", gender: "Women", price: "KES 9,200", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
];

export default function BoutiqueWebsite() {
  return (
    <div className="min-h-screen bg-neutral-100 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wide">Ngash Collection</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">Men</a>
            <a href="#" className="hover:text-black">Women</a>
            <a href="#" className="hover:text-black">Delivery</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[url('https://images.unsplash.com/photo-1521334884684-d80222895322')] bg-cover bg-center py-32 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Streetwear. Shoes. Clean Style.</h2>
        <p className="mb-8 text-lg">Urban shoes & clean streetwear for everyday drip</p>
        <div className="flex justify-center gap-4">
          <Button className="rounded-2xl px-8">Shop Now</Button>
          <a href={waLink("Hi Ngash Collection, I would like to place an order.")}>
            <Button variant="outline" className="rounded-2xl px-8 bg-white text-black">WhatsApp Order</Button>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Shoes", "Hoodies", "Jackets", "Streetwear"].map((cat) => (
            <div key={cat} className="bg-white rounded-2xl shadow-sm py-6 font-semibold hover:shadow-md cursor-pointer">
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">Trending Drops</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover rounded-t-2xl" />
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.gender} · {product.category}</p>
                <p className="mt-1 font-medium">{product.price}</p>
                <div className="mt-4 space-y-2">
                  <Button className="w-full">Add to Cart</Button>
                  <a href={waLink(`Hi Ngash Collection, I want to order ${product.name} (${product.price}).`)}>
                    <Button variant="outline" className="w-full">Order on WhatsApp</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Delivery Info */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Delivery Areas</h4>
            <p>Nairobi: Same-day / Next-day</p>
            <p>Countrywide: 1–3 working days</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Payment</h4>
            <p>M-Pesa</p>
            <p>Cash on Delivery (selected areas)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Customer Support</h4>
            <p>WhatsApp: +254 746 962 435</p>
            <p>Fast response during business hours</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={waLink("Hi Ngash Collection, I would like to place an order.")}
        className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-full shadow-lg"
      >
        Order via WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Ngash Collection</h4>
            <p>Streetwear & shoes built for everyday style.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>Shop</li>
              <li>Men</li>
              <li>Women</li>
              <li>Delivery</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Nairobi, Kenya</p>
            <p>WhatsApp Orders Available</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs pb-6">© 2026 Ngash Collection. All rights reserved.</div>
      </footer>
    </div>
  );
}
