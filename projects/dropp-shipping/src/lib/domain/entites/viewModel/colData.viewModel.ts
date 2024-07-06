import { colData } from "../model/colData.model";

export class colDataViewModel{
    private coldData:colData[]

    constructor(colData:colData[]){
        this.coldData=colData
    }

    getColData(){
        return this.coldData
    }
}