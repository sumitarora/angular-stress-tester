import { Component, OnInit } from '@angular/core';
import { Service10Service } from '../../services/service-10.service';

@Component({
  selector: 'app-comp-10',
  templateUrl: './comp-10.component.html',
  styleUrls: ['./comp-10.component.css']
})
export class Comp10Component implements OnInit {

  constructor(private _service: Service10Service) { }

  ngOnInit() {
  }

}
