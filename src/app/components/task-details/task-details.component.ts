import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBooking } from 'src/app/model/task';
import { TodoCrudService } from 'src/app/service/todo-crud.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  detailsForm!:IBooking;
  isEmpty!:boolean;
  constructor( private fb: FormBuilder,
    private todoService:TodoCrudService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.todoService.getBooking(id).subscribe(res=>{
        this.setDetailsForm(res);
      })
    }
  }

  setDetailsForm(data:IBooking){
    this.detailsForm = {
      name: data.name,
      emailAddress:data.emailAddress,
      destination:data.destination,
      numberofTravellers:data.numberofTravellers,
      budgetPerPerson:data.budgetPerPerson
    }
    this.isEmpty = Object.values(this.detailsForm).every(x => x === null || x === '');

  }
  back(){
    this.router.navigate(['']);
  }
}
