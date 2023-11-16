import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-post-form',
  templateUrl: './user-post-form.component.html',
  styleUrls: ['./user-post-form.component.scss']
})
export class UserPostFormComponent {
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });

  get titleControl(): FormControl {
    return this.postForm.get('title') as FormControl;
  }

  get bodyControl(): FormControl {
    return this.postForm.get('body') as FormControl;
  }
}
