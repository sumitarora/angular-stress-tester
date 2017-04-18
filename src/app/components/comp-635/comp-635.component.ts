import { Component, OnInit } from '@angular/core';
import { Service635Service } from '../../services/service-635.service';

@Component({
  selector: 'app-comp-635',
  templateUrl: './comp-635.component.html',
  styleUrls: ['./comp-635.component.css']
})
export class Comp635Component implements OnInit {

  constructor(private _service: Service635Service) { }

  ngOnInit() {
  }

}
