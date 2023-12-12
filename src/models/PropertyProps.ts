export default interface PropertyProps { 
    _id?: string,
    property_status_id?: {name: string},
    price: { $numberDecimal: any},
    title: string,
    address1: string,
    city: string,
    area: number,
    bedroom_number: number, 
    baths: number,
    imageUrl: string,
    description?: string,
    name?: string,
    onHandleEvent?: () => void,
    user_id?: {
                email: string,
                fullname: string,
                phone: string
            },
}
