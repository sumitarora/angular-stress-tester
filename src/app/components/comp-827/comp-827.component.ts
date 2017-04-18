import { Component, OnInit } from '@angular/core';
import { Service827Service } from '../../services/service-827.service';

@Component({
  selector: 'app-comp-827',
  templateUrl: './comp-827.component.html',
  styleUrls: ['./comp-827.component.css']
})
export class Comp827Component implements OnInit {

  constructor(private _service: Service827Service) { }

  ngOnInit() {
  }

}
