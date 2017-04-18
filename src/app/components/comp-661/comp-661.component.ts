import { Component, OnInit } from '@angular/core';
import { Service661Service } from '../../services/service-661.service';

@Component({
  selector: 'app-comp-661',
  templateUrl: './comp-661.component.html',
  styleUrls: ['./comp-661.component.css']
})
export class Comp661Component implements OnInit {

  constructor(private _service: Service661Service) { }

  ngOnInit() {
  }

}
