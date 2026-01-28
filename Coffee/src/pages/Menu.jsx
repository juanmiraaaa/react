import { Link, useLocation } from "react-router-dom"
import CoffeeCard from "../components/ui/CoffeeCard"

const coffees = [
  { id: 1, name: "Cappuccino", price: "2,50€", img: "/cappuccino.png" },
  { id: 2, name: "Chai Latte", price: "2,70€", img: "/chai.png" },
  { id: 3, name: "Espresso", price: "2,80€", img: "/espresso.png" },
  { id: 4, name: "Macchiato", price: "2,90€", img: "/macchiato.png" }
]

export default function Menu() {

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-extrabold text-[#7a4a22]">Nuestro menú</h1>
      <p className="mt-3 text-[#fff7ea]">
        Explora nuestros cafés y mezclas exclusivas.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}{/*Así llamas a la variable le paso un parametro al CoffeeCard y el key permite identificarlo en vez de añadir un index al map */}
      </div>
    </main>
  )
}
