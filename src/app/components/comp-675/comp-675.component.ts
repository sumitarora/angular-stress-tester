import { Component, OnInit } from '@angular/core';
import { Service675Service } from '../../services/service-675.service';

@Component({
  selector: 'app-comp-675',
  templateUrl: './comp-675.component.html',
  styleUrls: ['./comp-675.component.css']
})
export class Comp675Component implements OnInit {

  constructor(private _service: Service675Service) { }

  ngOnInit() {
  }

}
