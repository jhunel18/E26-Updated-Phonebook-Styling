import { Component } from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';
import { CONTACTS } from 'src/app/mock-data/mock-contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  contacts = CONTACTS;
  // newName = '';
  // newPhone = '';
  // newType = '';
  model:any = {};
  model2:any = {};
  addContact(){

    // this.contacts.push({
    //   name:this.newName,
    //   phone:this.newPhone,
    //   type:this.newType
    // })
    this.contacts.push(this.model)
    this.model = {}
    
  }

  deleteContact(id:number){
    this.contacts.splice(id,1);
  }
  myValue:any;
  editContact(id:any){
    this.model2.name = this.contacts[id].name;
    this.model2.phone = this.contacts[id].phone;
    this.model2.type = this.contacts[id].type;
    this.myValue = id;


  }
  updateContact(){
   let k = this.myValue;
   for(let i = 0; i<this.contacts.length; i++){
    if(i==k){
      this.contacts[i] = this.model2;
      this.model2  ={}
    }
   }
    
  }

}
