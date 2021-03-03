import { Location } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Person } from 'src/app/modules/person';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
id : any;
data : any;
person = new Person()

  constructor( private route:ActivatedRoute,private dataService:DataService)
  {  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getData();
  }

  getData()
  {
    this.dataService.getPeronById(this.id).subscribe(res =>
      {
        this.data=res;
        this.person=this.data;
      })
  }

  updatePerson()
  {
    this.dataService.updatePerson(this.id,this.person).subscribe(res =>{});
  }
}


