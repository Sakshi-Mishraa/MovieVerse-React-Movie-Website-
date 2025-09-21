import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const Error=()=>{
    const error=useRouteError();
    console.log(error);

    const navigate=useNavigate();
    const goBackToPreviousPage=()=>{
        navigate(-1);
    }

    if(error.status===404){
        return(
            <>
            <h4>404 page not found</h4>
            <p>The page u r looking for does not exists</p>
            <p>{error.data} </p>
            <button onClick={goBackToPreviousPage} style={{color :"purple"}}>Back to Previous Page</button>
            </>
        )
    }
    else{
        return <p> some error ocuured </p>
    }
}