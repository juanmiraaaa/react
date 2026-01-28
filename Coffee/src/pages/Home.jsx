import { Link } from "react-router-dom"
import HeroImg from "./../../public/coffee-hero.png"

export default function Home() {
  
  return (
    <main className="relative h-full">
      <img
        src={HeroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 left-[20%] top-[10%] max-w-svh px-6 text-white">
        <p className="text-white/80 text-7xl mb-10">Tenemos tu mañana cubierta de</p>

        <h1 className="mt-3 font-[cursive] my-20 text-[200px] leading-none">
          Coffee
        </h1>

        <p className="w-full text-1xl text-white/80 leading-relaxed">
          Descubre los mejores sabores y explora el mundo del café con nosotros.
        </p>

        <div className="mt-8 flex gap-3">
          <Link
            to="/menu"
            className="rounded-full bg-[#f0b36b] px-6 py-3 font-semibold text-[#2b1f16] hover:opacity-90 transition"
          >
            Pedir café
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 transition"
          >
            Saber más
          </Link>
        </div>
      </div>
    </main>
  )
}
