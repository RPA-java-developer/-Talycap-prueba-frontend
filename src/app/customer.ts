import { Groundlogistics } from "./groundlogistics";

export class Customer {
    customer_id:number;
    name:string;
    email:string;
    movil:string;
    address:string;
    password:string;
    //groundLogistics: Groundlogistics[];
    groundLogistics: Groundlogistics[];
    constructor() {
    }    
}
