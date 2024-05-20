export const DashBoard = (length)=>{
    console.log("Product Length in action: ", length);
    return{
        type:"DASHBOARD",
        payload : length
    }
}
