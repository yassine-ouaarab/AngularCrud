import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
varhome="yabadi hhyabada"
myinput="i love chicken"
mybool ="true"
hahavar: any

ninja={
  name :"yoonmerai",
  color : "black"
};

@Input() players : any;

constructor() { }

  ngOnInit(): void {
  }

  myclick(val : any)
  {
    let hahavar = "blue"
    alert(val+hahavar)
  }


}
