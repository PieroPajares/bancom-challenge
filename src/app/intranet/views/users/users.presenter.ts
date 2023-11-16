import { Injectable, inject } from '@angular/core';
import { UserHttpService } from '../../repositories/user-http.service';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../../domains/interfaces/user-http.interface';
import { PostHttpService } from '../../repositories/post-http.service';
import { UserPost, UserPostForm } from '../../domains/interfaces/post-http.interface';

@Injectable()
export class UsersPresenter {
  userHttpService= inject(UserHttpService);
  postHttpService= inject(PostHttpService);

  users = new BehaviorSubject<User[]>([]);
  posts = new BehaviorSubject<UserPost[]>([]);

  destroy$ = new Subject<void>();

  get users$(): Observable<User[]> {
    return this.users.asObservable();
  }

  get posts$(): Observable<UserPost[]> {
    return this.posts.asObservable();
  }

  getUsers(): void {
    this.userHttpService.getUsers().pipe(takeUntil(this.destroy$)).subscribe(users => {
      this.users.next(users);
    });
  }

  getPostsByUser(userId: number): void {
    this.postHttpService.getPostsByUser(userId).pipe(takeUntil(this.destroy$)).subscribe(posts => {
      this.posts.next(posts);
    });
  }

  createUserPost(form: UserPostForm): void {
    this.postHttpService.createUserPost(form).pipe(takeUntil(this.destroy$)).subscribe(createdPost => {
      this.getPostsByUser(createdPost.userId);
    });
  }
}
