import { Component, OnInit } from '@angular/core';
import { Service526Service } from '../../services/service-526.service';

@Component({
  selector: 'app-comp-526',
  templateUrl: './comp-526.component.html',
  styleUrls: ['./comp-526.component.css']
})
export class Comp526Component implements OnInit {

  constructor(private _service: Service526Service) { }

  ngOnInit() {
  }

}
