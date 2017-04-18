import { Component, OnInit } from '@angular/core';
import { Service99Service } from '../../services/service-99.service';

@Component({
  selector: 'app-comp-99',
  templateUrl: './comp-99.component.html',
  styleUrls: ['./comp-99.component.css']
})
export class Comp99Component implements OnInit {

  constructor(private _service: Service99Service) { }

  ngOnInit() {
  }

}
