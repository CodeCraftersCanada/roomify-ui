export default interface PropertyProps { 
    property_status_id?: {name: string},
    price: { $numberDecimal: any},
    title: string,
    address1: string,
    city: string,
    area: number,
    bedroom_number: number, 
    baths: number,
    imageUrl: string,
    onHandleEvent?: () => void,
}
