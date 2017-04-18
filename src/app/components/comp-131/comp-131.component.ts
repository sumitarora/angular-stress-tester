import { Component, OnInit } from '@angular/core';
import { Service131Service } from '../../services/service-131.service';

@Component({
  selector: 'app-comp-131',
  templateUrl: './comp-131.component.html',
  styleUrls: ['./comp-131.component.css']
})
export class Comp131Component implements OnInit {

  constructor(private _service: Service131Service) { }

  ngOnInit() {
  }

}
