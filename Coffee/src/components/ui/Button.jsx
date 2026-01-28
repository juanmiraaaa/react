export default function Button({text, onClick, color}){

    const theme = {
        light: "bg-blue-700",
        night: "bg-slate-700"
    }
    
    return(
        <button 
            onClick={onClick}
            className={`bg-slate-800 font-[D-DIN] font-bold py-2 ${theme[color]} px-6 text-white rounded-xl cursor-pointer hover:bg-slate-600`}>
            {text}
        </button>
    )
}