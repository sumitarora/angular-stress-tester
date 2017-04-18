import { Component, OnInit } from '@angular/core';
import { Service856Service } from '../../services/service-856.service';

@Component({
  selector: 'app-comp-856',
  templateUrl: './comp-856.component.html',
  styleUrls: ['./comp-856.component.css']
})
export class Comp856Component implements OnInit {

  constructor(private _service: Service856Service) { }

  ngOnInit() {
  }

}
