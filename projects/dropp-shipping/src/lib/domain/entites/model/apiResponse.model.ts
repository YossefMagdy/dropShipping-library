export interface baseResponse<T>{
    code:number;
    data:T;
    message:string;
    requestId:string;
    result:boolean;
    success:boolean;
}