import { Component, OnInit } from '@angular/core';
import { Service507Service } from '../../services/service-507.service';

@Component({
  selector: 'app-comp-507',
  templateUrl: './comp-507.component.html',
  styleUrls: ['./comp-507.component.css']
})
export class Comp507Component implements OnInit {

  constructor(private _service: Service507Service) { }

  ngOnInit() {
  }

}
