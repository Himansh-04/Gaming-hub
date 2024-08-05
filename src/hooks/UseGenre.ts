import UseData from "./UseData";

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}


const UseGenre=()=> UseData<Genre>('/genres');
export default UseGenre