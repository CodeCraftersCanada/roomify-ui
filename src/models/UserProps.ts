export default interface UserProps { 
    uid?: string,
    fullname: string,
    phone: string,
    email: string,
    enabled: number,
    college?: string,
    address?: string,
    latitude?: DoubleRange,
    longitude?: DoubleRange,
    about?: string,
    image_path?: string,
    onHandleEvent?: () => void,
}
