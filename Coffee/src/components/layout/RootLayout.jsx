import Header from "./Header";
import Home from "../../pages/Home";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="h-dvh grid grid-rows-[auto_1fr_auto]">{/* dvh*/}
            <Header />
            <Outlet />{/*renderiza todas las rutas que esten dentro de este componente */}
            <Footer />
        </div>
    )
}