import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UsersPresenter } from './users.presenter';
import { User } from '../../domains/interfaces/user-http.interface';
import { Observable } from 'rxjs';
import { UserPost, UserPostForm } from '../../domains/interfaces/post-http.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersPresenter],
})
export class UsersComponent implements OnInit, OnDestroy {
  userPresenter = inject(UsersPresenter);
  users$: Observable<User[]> = this.userPresenter.users$;
  posts$: Observable<UserPost[]> = this.userPresenter.posts$;
  
  ngOnInit(): void {
    this.userPresenter.getUsers();
  }

  getPostsByUser(id: number): void {
    this.userPresenter.getPostsByUser(id);
  }

  createUserPost(form: UserPostForm): void {
    this.userPresenter.createUserPost(form);
  }

  ngOnDestroy(): void {
    this.userPresenter.destroy$.next();
    this.userPresenter.destroy$.complete();
  }
}