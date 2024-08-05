import UseData from "./UseData";

export interface Genre{
    id:number;
    name:string;
}


const UseGenre=()=> UseData<Genre>('/genres');
export default UseGenre