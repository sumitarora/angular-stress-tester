import { Component, OnInit } from '@angular/core';
import { Service555Service } from '../../services/service-555.service';

@Component({
  selector: 'app-comp-555',
  templateUrl: './comp-555.component.html',
  styleUrls: ['./comp-555.component.css']
})
export class Comp555Component implements OnInit {

  constructor(private _service: Service555Service) { }

  ngOnInit() {
  }

}
