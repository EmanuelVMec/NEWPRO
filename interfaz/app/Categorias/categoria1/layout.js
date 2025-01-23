import Navbarcate from "@/app/componentes/navbarcate";

export default function CategoriaLayout({children}){
    return (
        <>
            <Navbarcate/>
            {children}
        </>
    )
}