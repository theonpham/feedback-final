import { Component, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private fb: FormBuilder,
  ) {}
  formGroup: FormGroup = this.fb.group({
    status: [null, [Validators.required]],
    title: [null, [Validators.required]],
    contend: [null],
  });
  onSubmit() {
    const input = this.formGroup.getRawValue();
    console.log(input);
  }
}
