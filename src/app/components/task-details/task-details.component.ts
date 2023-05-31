import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { IBooking } from 'src/app/model/task';
import { TodoCrudService } from 'src/app/service/todo-crud.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  bookingSubmissions!:IBooking[];
  isEmpty!:boolean;
  constructor( private fb: FormBuilder,
    private todoService:TodoCrudService,
    private router:Router) { }

  ngOnInit(): void {
      this.todoService.getBooking().subscribe(res=>{
        this.setDetailsForm(res);
      })
    
  }

  setDetailsForm(data:IBooking[]){
    
    if(Array.isArray(data)){
      this.isEmpty =  data.length===0 ? true : false;
      if(!this.isEmpty){
        this.bookingSubmissions = data;
      }
    }

  }

  back(){
    this.router.navigate(['']);
  }
}
