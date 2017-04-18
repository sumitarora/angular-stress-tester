import { Component, OnInit } from '@angular/core';
import { Service379Service } from '../../services/service-379.service';

@Component({
  selector: 'app-comp-379',
  templateUrl: './comp-379.component.html',
  styleUrls: ['./comp-379.component.css']
})
export class Comp379Component implements OnInit {

  constructor(private _service: Service379Service) { }

  ngOnInit() {
  }

}
