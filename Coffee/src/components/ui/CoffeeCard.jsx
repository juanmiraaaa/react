import { Link } from "react-router-dom";

{/*Cuando es un componente no se pone {}, sin embargo, cuando es desestructurado sí */}

export default function CoffeeCard({coffee}) {
  {/*Cada componente recordar que es una funcion*/}
  const { id, name, price, img} = coffee;

    return (
        <div
            className="rounded-2xl bg-[#fff7ea] border border-[#f1dfc7] overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="h-40 bg-white">
              <img src={coffee.img} alt="" className="h-full w-full object-cover" />
            </div>

            <div className="p-5 text-center">
              <h3 className="font-extrabold text-lg text-[#7a4a22]">{name}</h3>{/*metemos js con llaves */}
              <p className="mt-2 font-extrabold text-[#7a4a22]">{price}</p>

              <Link
                to="/contact"
                className="mt-4 inline-flex w-full justify-center rounded-full bg-[#f0b36b] px-4 py-2 font-semibold hover:opacity-90 transition"
              >
                Order
              </Link>
            </div>
          </div>
    )
}