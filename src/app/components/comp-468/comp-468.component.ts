import { Component, OnInit } from '@angular/core';
import { Service468Service } from '../../services/service-468.service';

@Component({
  selector: 'app-comp-468',
  templateUrl: './comp-468.component.html',
  styleUrls: ['./comp-468.component.css']
})
export class Comp468Component implements OnInit {

  constructor(private _service: Service468Service) { }

  ngOnInit() {
  }

}
