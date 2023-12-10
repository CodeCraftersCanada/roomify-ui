export default interface UserProps { 
    fullName: string,
    phone: string,
    email: string,
    enabled: number,
    college?: string,
    address?: string,
    latitude?: DoubleRange,
    longitude?: DoubleRange,
    about?: string,
    image?: string,
    onHandleEvent?: () => void,
}
