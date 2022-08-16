import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from '@core/services/list.service';
import { User } from 'src/models/user.model';
import { FilterPipePipe } from '@shared/pipes/filter-pipe.pipe';
@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
 filterUser:'';
  users: User[]=[];
 submitted:any;
  ngOnInit(){
    this.fetchUsers()
    // this.onChange();
  }
  constructor(private listService:ListService){

  }
  fetchUsers(){
    this.listService.getAllUsers()
    .subscribe(users=>{
      this.users=users.data
      console.log(this.users);

    })
  }
  // onChange():void{
  //   this.userSearch.valueChanges
  //   .pipe(
      
  //     map((query:string)=>query.trim()),
  //     debounceTime(350),
  //     distinctUntilChanged(), 
  //     filter((query:string)=>query!=''),
  //     tap((query:string)=>this.submitted.emit(query))

  //   ).subscribe();

}
