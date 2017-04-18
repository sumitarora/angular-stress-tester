import { Component, OnInit } from '@angular/core';
import { Service31Service } from '../../services/service-31.service';

@Component({
  selector: 'app-comp-31',
  templateUrl: './comp-31.component.html',
  styleUrls: ['./comp-31.component.css']
})
export class Comp31Component implements OnInit {

  constructor(private _service: Service31Service) { }

  ngOnInit() {
  }

}
