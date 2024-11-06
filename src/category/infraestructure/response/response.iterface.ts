export interface IReponse<T = null> {
    message: string;
    code: number;
    data?: T;                
    timestamp?: string;      
    error?: string;          
}
