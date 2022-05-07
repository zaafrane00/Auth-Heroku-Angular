import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vermeg-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prenom = 'test2'
  
  delete(){
    alert('ok')
  }



}
