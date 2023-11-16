import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { User } from '../../domains/interfaces/user-http.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserPostFormComponent } from '../user-post-form/user-post-form.component';
import { UserPost, UserPostForm } from '../../domains/interfaces/post-http.interface';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserTableComponent {
  @Input() users: User[] = [];
  @Input() posts: UserPost[] = [];
  @Output() expand: EventEmitter<number> = new EventEmitter();
  @Output() create: EventEmitter<UserPostForm> = new EventEmitter();

  columnsToDisplay = ['name', 'username', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedUser: User | null = null;
  dialog = inject(MatDialog);

  handlerExpand(user: User): void {
    this.expandedUser = this.expandedUser === user ? null : user;
    this.expand.emit(user.id);
  }

  openDialog(user: User) {
    const dialogRef = this.dialog.open(UserPostFormComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.expandedUser?.id && result) {
        const userPostForm: UserPostForm = {
          userId: this.expandedUser.id,
          title: result.title,
          body: result.body,
        }
        this.create.emit(userPostForm);
      }
    });
  }
}
