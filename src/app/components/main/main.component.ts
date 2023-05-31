
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBooking } from 'src/app/model/task';
import { TodoCrudService } from 'src/app/service/todo-crud.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  bookingForm!:FormGroup;
  formSubmitted:boolean = false;
  countries = [
    {name:'India',id:1},
    {name:'Africa',id:2},
    {name:'Europe',id:3}];
  constructor(
    private fb: FormBuilder,
    private todoService:TodoCrudService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      emailAddress:['',[Validators.required,Validators.email]],
      destination:['',Validators.required],
      numberofTravellers:['',[Validators.required,Validators.pattern("^[0-9]*$")],],
      budgetPerPerson:['',[Validators.required,Validators.pattern("^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{0,2}$")]]
    });
  }

  onSubmit(){
    const bookingDetails:IBooking= {
      name: this.bookingForm.controls.name.value,
      emailAddress:this.bookingForm.controls.emailAddress.value,
      destination:this.bookingForm.controls.destination.value,
      numberofTravellers:this.bookingForm.controls.numberofTravellers.value,
      budgetPerPerson:this.bookingForm.controls.budgetPerPerson.value
    }
    this.todoService.postBooking(bookingDetails).subscribe(res=>{
      alert('Booking Made Successfully')
      this.bookingForm.reset();
      this.router.navigate(['/details',res._id]);
    },err=>{
      alert('Something went wrong');
    });
  }

  showSubmissions(){
    this.router.navigate(['details']);
  }
}
