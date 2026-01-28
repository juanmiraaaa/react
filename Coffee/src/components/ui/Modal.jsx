export default function Modal({children, onClose}){
    return (
        <div
        onClick={onClose}
        className="bg-black/50 fixed flex z-10 inset-0 items-center justify-center">
            <div 
            onClick={(e) => e.stopPropagation()}
            className="relative">    
                <button
                onClick={onClose}
                className="absolute right-4 top-4 text-black">X</button>
                {children}        
            </div>
        </div>
    )
}