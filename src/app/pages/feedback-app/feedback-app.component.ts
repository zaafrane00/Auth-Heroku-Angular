import { Component, OnInit } from '@angular/core';
import { liste } from 'src/app/data/feedbacks_data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback-app',
  templateUrl: './feedback-app.component.html',
  styleUrls: ['./feedback-app.component.css']
})
export class FeedbackAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = liste
  text = ''
  rating = 1
  nums = [1,2,3,4,5,6,7,8,9,10]
  add(){
    if( this.text && this.text.length >3){
      this.items.unshift({text : this.text , rating : this.rating , _id : 4})
      this.text = ''
    }
  }
  delete(i : number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText : 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.items.splice(i , 1)
      }
    })
    
  }

}
