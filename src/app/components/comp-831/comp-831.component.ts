import { Component, OnInit } from '@angular/core';
import { Service831Service } from '../../services/service-831.service';

@Component({
  selector: 'app-comp-831',
  templateUrl: './comp-831.component.html',
  styleUrls: ['./comp-831.component.css']
})
export class Comp831Component implements OnInit {

  constructor(private _service: Service831Service) { }

  ngOnInit() {
  }

}
