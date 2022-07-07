export class Groundlogistics {
    id:number;
    codigo_bodegaEntrega:string;
    tipoProducto:string;
    cantidadProducto:number;
    precioEnvio:number;
    descuento:number;
    placaVehiculo:string;
    numeroGuia:string;
    fechaRegistro: string;
    fechaEntrega: string;
    customer_id:number;
    customer:object;

    constructor() {
    }  
    
    setCustomer(customer_id?: number) {
        this.customer = { "customer_id": customer_id};
    }

}
