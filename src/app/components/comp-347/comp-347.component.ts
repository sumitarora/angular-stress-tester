import { Component, OnInit } from '@angular/core';
import { Service347Service } from '../../services/service-347.service';

@Component({
  selector: 'app-comp-347',
  templateUrl: './comp-347.component.html',
  styleUrls: ['./comp-347.component.css']
})
export class Comp347Component implements OnInit {

  constructor(private _service: Service347Service) { }

  ngOnInit() {
  }

}
