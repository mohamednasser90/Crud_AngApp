import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  PeopleList=[
    {
      id:1,
      firstname:'Mohamed',
      lastname:'Nasser',
      phone:"05466666666"
    },
    {
      id:2,
      firstname:'mahran',
      lastname:'nasser',
      phone:"0020102544444"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  delete(person:any)
  {
    let index = this.PeopleList.indexOf(person);
    this.PeopleList.splice(index, 1);

  }

}
