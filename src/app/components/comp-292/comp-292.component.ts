import { Component, OnInit } from '@angular/core';
import { Service292Service } from '../../services/service-292.service';

@Component({
  selector: 'app-comp-292',
  templateUrl: './comp-292.component.html',
  styleUrls: ['./comp-292.component.css']
})
export class Comp292Component implements OnInit {

  constructor(private _service: Service292Service) { }

  ngOnInit() {
  }

}
