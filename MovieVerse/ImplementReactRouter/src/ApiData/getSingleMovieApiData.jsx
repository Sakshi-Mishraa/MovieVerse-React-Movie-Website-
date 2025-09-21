export const getSingleMovieApiData=async({params})=>{
    try{
        const response=await fetch(`https://api.tvmaze.com/shows/${params.id}`);
        if (!response.ok) throw new Error("Failed to Load Movie");
        const data=response.json();
        console.log(data);
        return data;
    } catch(error){
        console.log(error);
    }  
}