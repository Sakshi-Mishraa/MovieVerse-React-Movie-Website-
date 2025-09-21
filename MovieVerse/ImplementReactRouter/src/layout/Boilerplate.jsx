import { Footer } from "./Footer"
import { Header } from "./Header"
import { Outlet, useNavigation} from 'react-router-dom';

export const Boilerplate=()=>{
    const navigation = useNavigation();
    console.log(navigation);
    if(navigation.state === "loading"){
        return <h1>Loading page...</h1>
    }
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}