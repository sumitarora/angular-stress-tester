import { Component, OnInit } from '@angular/core';
import { Service35Service } from '../../services/service-35.service';

@Component({
  selector: 'app-comp-35',
  templateUrl: './comp-35.component.html',
  styleUrls: ['./comp-35.component.css']
})
export class Comp35Component implements OnInit {

  constructor(private _service: Service35Service) { }

  ngOnInit() {
  }

}
