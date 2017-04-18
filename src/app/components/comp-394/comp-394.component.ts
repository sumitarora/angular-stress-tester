import { Component, OnInit } from '@angular/core';
import { Service394Service } from '../../services/service-394.service';

@Component({
  selector: 'app-comp-394',
  templateUrl: './comp-394.component.html',
  styleUrls: ['./comp-394.component.css']
})
export class Comp394Component implements OnInit {

  constructor(private _service: Service394Service) { }

  ngOnInit() {
  }

}
