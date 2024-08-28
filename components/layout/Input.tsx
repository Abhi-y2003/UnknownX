interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: React.FC<InputProps>=({ placeholder, value, type, disabled, onChange })=>{
    return( <div>
        <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="w-full p-4 text-lg bg-black border-2 border-neutral-800 text-white focus:border-2
        focus:border-sky-500 transition rounded-md outline-none disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"/>
    </div>)
}

export default Input;