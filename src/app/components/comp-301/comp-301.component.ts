import { Component, OnInit } from '@angular/core';
import { Service301Service } from '../../services/service-301.service';

@Component({
  selector: 'app-comp-301',
  templateUrl: './comp-301.component.html',
  styleUrls: ['./comp-301.component.css']
})
export class Comp301Component implements OnInit {

  constructor(private _service: Service301Service) { }

  ngOnInit() {
  }

}
