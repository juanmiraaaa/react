export default function Input({label = 'Hola', value, type, placeholder, onChange, error}) {

   
    return(
        <div className="flex flex-col ">
            <label className="font-semibold">
                {label}
            </label>
            <input 
                className={`border px-4 py-2
                    ${error ? "border-red-500" : "border-gray-600 "} `}
                type={type} 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && (
                <p className="text-red-500">{error}</p>
            )}
        </div>
    )
}