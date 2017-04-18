import { Component, OnInit } from '@angular/core';
import { Service498Service } from '../../services/service-498.service';

@Component({
  selector: 'app-comp-498',
  templateUrl: './comp-498.component.html',
  styleUrls: ['./comp-498.component.css']
})
export class Comp498Component implements OnInit {

  constructor(private _service: Service498Service) { }

  ngOnInit() {
  }

}
