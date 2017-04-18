import { Component, OnInit } from '@angular/core';
import { Service754Service } from '../../services/service-754.service';

@Component({
  selector: 'app-comp-754',
  templateUrl: './comp-754.component.html',
  styleUrls: ['./comp-754.component.css']
})
export class Comp754Component implements OnInit {

  constructor(private _service: Service754Service) { }

  ngOnInit() {
  }

}
