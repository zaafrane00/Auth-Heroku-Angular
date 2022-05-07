import { Component, OnInit } from '@angular/core';
import { liste } from 'src/app/data/feedbacks_data';
import { Feedback } from 'src/app/viewModels/feedback';
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
  items : Feedback[]= liste
/*   text = ''
  rating = 1
  _id= undefined */
  feedback : Feedback = new Feedback()

  nums = [1,2,3,4,5,6,7,8,9,10]
  content = ''

  editMode = false
  add(){
    /* ! null  ! undefined !false ! 0  */
    if(this.editMode){

      let index=  this.items.findIndex((i)=>i._id == this.feedback._id)
      /* this.items[index].rating = this.rating
      this.items[index].text = this.text */
      this.items[index]= this.feedback
    /*   this.text = ''
      this.rating = 1 */
      this.feedback = new Feedback()
      this.editMode = false
    }else{
      /* if( this.text && this.text.length >3){
        this.items.unshift({text : this.text , rating : this.rating , _id : 4})
        this.text = ''
      } */
      if( this.feedback.text && this.feedback.text.length >3){
        this.feedback._id = 4
        this.items.unshift(this.feedback)
        this.feedback = new Feedback()
      }
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

  edit(feedback : any){
    console.log(feedback)
    /* this.text = feedback.text
    this.rating = feedback.rating
    this._id = feedback._id */
    this.feedback = feedback
    this.editMode = true
  }

}
