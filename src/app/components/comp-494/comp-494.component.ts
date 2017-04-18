import { Component, OnInit } from '@angular/core';
import { Service494Service } from '../../services/service-494.service';

@Component({
  selector: 'app-comp-494',
  templateUrl: './comp-494.component.html',
  styleUrls: ['./comp-494.component.css']
})
export class Comp494Component implements OnInit {

  constructor(private _service: Service494Service) { }

  ngOnInit() {
  }

}
