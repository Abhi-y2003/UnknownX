import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps{
    label: string,
    showBackArrow?: Boolean

}

const Header: React.FC<HeaderProps>= ({label, showBackArrow}) => {
    const router = useRouter();
    const handelBack = useCallback(()=>{
        router.back()
    },[router])
    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex items-center gap-2">
                {
                    showBackArrow &&(
                        <BiArrowBack onClick={handelBack} color="white" size={20} className="cursor-pointer hover:opacity-20 transition"/>
                    )
                }

                <h1 className="text-white font-semibold text-xl">{label}</h1>

            </div>

        </div>
    );
};

export default Header;