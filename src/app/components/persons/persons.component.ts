import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Person} from 'src/app/modules/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
persons : any;
person = new Person();
  constructor( private dataService:DataService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons()
  {
    this.dataService.getPersons().subscribe(res=>{
      this.persons=res;
    });
  }

 insertPerson()
  {
    this.dataService.insertPerson(this.person).subscribe(res=>{
      this.getPersons();
    });
  }

  deletePerson(id:any)
  {
    this.dataService.deletePerson(id).subscribe(res=>{
      this.getPersons();
    });
  }

}
