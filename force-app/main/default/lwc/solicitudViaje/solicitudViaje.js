import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/TableController.getAccounts';

const COLUMNS = [
    {label:'Name', fielName:'Name', type:'text'},
    {label:'Annual Revenue', fielName:'AnnualRevenue', type:'text'},
    {label:'Industry', fielName:'Industry', type:'text'},
    {label:'Phone', fielName:'Phone', type:'phone'},
]

export default class SolicitudViaje extends LightningElement {
    tableData
    columns = COLUMNS
    @wire(getAccounts)
    accountsHandler({data, error}){
        if(data){
            console.log(data)
            this.tableData = data
        }
        if(error){
            console.error(error)
        }
    }
}