import { UserData } from "./User";

export interface  UserDetail extends UserData{
phone: string;
website: string;
company: Company;
}
export interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}