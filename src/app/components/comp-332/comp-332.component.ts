import { Component, OnInit } from '@angular/core';
import { Service332Service } from '../../services/service-332.service';

@Component({
  selector: 'app-comp-332',
  templateUrl: './comp-332.component.html',
  styleUrls: ['./comp-332.component.css']
})
export class Comp332Component implements OnInit {

  constructor(private _service: Service332Service) { }

  ngOnInit() {
  }

}
