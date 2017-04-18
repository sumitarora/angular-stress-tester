import { Component, OnInit } from '@angular/core';
import { Service808Service } from '../../services/service-808.service';

@Component({
  selector: 'app-comp-808',
  templateUrl: './comp-808.component.html',
  styleUrls: ['./comp-808.component.css']
})
export class Comp808Component implements OnInit {

  constructor(private _service: Service808Service) { }

  ngOnInit() {
  }

}
