import { LightningElement, track, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/GetContactsFromAccount.getContactList';
export default class RecentContactsLwc extends LightningElement {
    @api recordId;
    @track columns = [{
        label: 'Name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'email',
    }
    ];

    @track error;
    @track conList;

    @wire(getContactList, { recordId: "$recordId" })
    wiredContacts({ error, data }) {
        console.log('Hello' + JSON.stringify(data));
        if (data) {
            this.conList = data;
        } else if (error) {
            this.error = error;
        }
    }
}
