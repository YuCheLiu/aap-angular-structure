import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-base-structure',
  templateUrl: './base-structure.component.html',
  styleUrls: ['./base-structure.component.css']
})
export class BaseStructureComponent implements OnInit {

  constructor() { 
    
  }
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
  }

}