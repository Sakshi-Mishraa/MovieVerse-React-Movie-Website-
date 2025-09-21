export const contactFormData=async ({request})=>{
    try{
        const response = await request.formData();
        console.log(response);
        const formData=Object.fromEntries(response);
        console.log(formData);
        return null;
    }catch(error){
        console.log(error);
    }
}