import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Person} from 'src/app/modules/person';
import { PersonsComponent } from 'src/app/components/persons/persons.component';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  persons : any;
  person = new Person();
  constructor(private dataService:DataService,private perscomp:PersonsComponent) { }

  ngOnInit(): void {
  }

 /* insertPerson()
  {
    this.dataService.insertPerson(this.person).subscribe(res=>{
     this.perscomp.getPersons();

    });
  }*/

}
