import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page " className="text-xl font-semibold mx-auto mt-20 text-neutral">

            <div className="flex flex-col justify-center items-center text-neutral">
                <h1 className="text-6xl font-bold text-neutral">😓</h1>
                <h1 className="text-6xl font-bold text-neutral">Oops!</h1>
                <p className="my-4">Sorry, an unexpected error has occurred.</p>
                <p className="my-4 text-red-400">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}