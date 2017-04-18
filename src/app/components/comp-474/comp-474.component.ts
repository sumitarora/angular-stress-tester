import { Component, OnInit } from '@angular/core';
import { Service474Service } from '../../services/service-474.service';

@Component({
  selector: 'app-comp-474',
  templateUrl: './comp-474.component.html',
  styleUrls: ['./comp-474.component.css']
})
export class Comp474Component implements OnInit {

  constructor(private _service: Service474Service) { }

  ngOnInit() {
  }

}
