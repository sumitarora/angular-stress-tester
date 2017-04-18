import { Component, OnInit } from '@angular/core';
import { Service413Service } from '../../services/service-413.service';

@Component({
  selector: 'app-comp-413',
  templateUrl: './comp-413.component.html',
  styleUrls: ['./comp-413.component.css']
})
export class Comp413Component implements OnInit {

  constructor(private _service: Service413Service) { }

  ngOnInit() {
  }

}
