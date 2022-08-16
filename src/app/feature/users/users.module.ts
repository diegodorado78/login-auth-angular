import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from '@shared/pipes/filter-pipe.pipe';

@NgModule({
    declarations: [
        HomeUserComponent,
        ListUsersComponent,
        NavBarComponent
      ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        
        
      ]
})
export class UsersModule {
}
