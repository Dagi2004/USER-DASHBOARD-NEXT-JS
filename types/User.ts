export interface UserData{
    id: number;
    name: string;
    email: string;
    username: string;
    address: Address;

}
export interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

 export interface TableData{
    users:UserData[]
}