import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'angular-project';

  chaine: string = "bonjour"
  date_naissance: Date = new Date()
  isSelected: Boolean = false;
  age: number = 16
  tab: any[] = [
    { nom : 'user1' , email : 'user1@gmail.com'},
    { nom : 'user2' , email : 'user2@gmail.com'},
    { nom : 'user3' , email : 'user3@gmail.com'}
  ]
  objet: {} = {}
  test : any 

  etat = 1


  fn(evt : any){
    
    console.log(evt.target.value)
    this.title = evt.target.value
  }

}
