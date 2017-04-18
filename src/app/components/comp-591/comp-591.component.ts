import { Component, OnInit } from '@angular/core';
import { Service591Service } from '../../services/service-591.service';

@Component({
  selector: 'app-comp-591',
  templateUrl: './comp-591.component.html',
  styleUrls: ['./comp-591.component.css']
})
export class Comp591Component implements OnInit {

  constructor(private _service: Service591Service) { }

  ngOnInit() {
  }

}
