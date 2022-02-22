export interface IData{
    id:number;
    email:string;
    first_name:string;
    last_name:string;


}
export interface api{
    page: number,
    per_page: number,
    total: number,
    total_page: number,
    data: [IData],
    support: {
        url: string,
        text: string
    }

}