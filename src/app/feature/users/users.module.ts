import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserComponent } from './home-user/home-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FilterPipePipe } from '@shared/pipes/filter-pipe.pipe';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
    declarations: [
        HomeUserComponent,
        ListUsersComponent,
        NavBarComponent,
        CreateUserComponent
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
