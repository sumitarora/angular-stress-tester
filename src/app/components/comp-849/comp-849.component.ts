import { Component, OnInit } from '@angular/core';
import { Service849Service } from '../../services/service-849.service';

@Component({
  selector: 'app-comp-849',
  templateUrl: './comp-849.component.html',
  styleUrls: ['./comp-849.component.css']
})
export class Comp849Component implements OnInit {

  constructor(private _service: Service849Service) { }

  ngOnInit() {
  }

}
