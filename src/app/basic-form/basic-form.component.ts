import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
favoriteColorControl = new FormControl('');

user=['personA', 'personB', 'personC']
favoriteColora = '';
  constructor() {
   }

  ngOnInit() {
  }

}