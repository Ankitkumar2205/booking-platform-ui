import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBooking } from '../model/task';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoCrudService {

  constructor( private http:HttpClient) { 
   }

   getBooking():Observable<IBooking[]>{
      return this.http.get<IBooking>("Http://localhost:3000/bookings").pipe(map((res:any)=>{
        return res;
      }));

   }

   postBooking(data:IBooking){
    console.log(data);
    return this.http.post<IBooking>("Http://localhost:3000/bookings",data).pipe(map((res:any)=>{
      return res;
    }));
   }
}
