import { Component, OnInit } from '@angular/core';
import { Service183Service } from '../../services/service-183.service';

@Component({
  selector: 'app-comp-183',
  templateUrl: './comp-183.component.html',
  styleUrls: ['./comp-183.component.css']
})
export class Comp183Component implements OnInit {

  constructor(private _service: Service183Service) { }

  ngOnInit() {
  }

}
