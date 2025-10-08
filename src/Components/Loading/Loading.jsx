import { MoonLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="max-w-[1700px] min-h-screen mx-auto flex justify-center items-center">
            <div>
                <MoonLoader size={100} color="blue"></MoonLoader>
            </div>
           
        </div>
    );
};

export default Loading;