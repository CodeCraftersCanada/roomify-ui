export default interface PropertyProps { 
    status: string,
    price: number,
    title: string,
    address: string,
    area: number,
    beds: number, 
    baths: number,
    imageUrl: string,
    onHandleEvent?: () => void,
}
