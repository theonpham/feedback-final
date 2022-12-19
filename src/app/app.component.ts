import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  updateFeedbackURL = (id: string) =>
    `https://restaurant-server-eight.vercel.app/restaurant/api/feedback/update/${id}?_method=PUT`;
  id = '';
  updateSuccess = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  ngOnInit() {
    var url = new URL(window.location.href);
    this.id = url.pathname.replace('/id=', '');
  }
  formGroup: FormGroup = this.fb.group({
    status: [null, [Validators.required]],
    title: [null, [Validators.required]],
    content: [null],
  });
  onSubmit() {
    const now = moment();
    const date = now.format('DD/MM/YYYY');
    const time = now.format('hh:mm:ss');
    const input = this.formGroup.getRawValue();
    input.date = date;
    input.time = time;
    // console.log(input);
    // console.log(this.updateFeedbackURL(this.id));
    this.http.put(this.updateFeedbackURL(this.id), input).subscribe(
      (data) => {
        this.updateSuccess = true;
      },
      () => {}
    );
  }
}
