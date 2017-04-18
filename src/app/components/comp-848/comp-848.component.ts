import { Component, OnInit } from '@angular/core';
import { Service848Service } from '../../services/service-848.service';

@Component({
  selector: 'app-comp-848',
  templateUrl: './comp-848.component.html',
  styleUrls: ['./comp-848.component.css']
})
export class Comp848Component implements OnInit {

  constructor(private _service: Service848Service) { }

  ngOnInit() {
  }

}
