import { Component, OnInit } from '@angular/core';
import { Service87Service } from '../../services/service-87.service';

@Component({
  selector: 'app-comp-87',
  templateUrl: './comp-87.component.html',
  styleUrls: ['./comp-87.component.css']
})
export class Comp87Component implements OnInit {

  constructor(private _service: Service87Service) { }

  ngOnInit() {
  }

}
