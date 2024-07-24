import { NavBar } from "../../components/Shared/NavBar";
   
    export const CreateAccount =()=>{
        return(<>
        <NavBar/>
        <div className="grid grid-cols-9 m-2">
<div className="col-span-4">
    Sign up
</div>
<div className="cols-span-5">image</div>
        </div>
        </>)
    }