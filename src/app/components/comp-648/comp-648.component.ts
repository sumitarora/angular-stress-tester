import { Component, OnInit } from '@angular/core';
import { Service648Service } from '../../services/service-648.service';

@Component({
  selector: 'app-comp-648',
  templateUrl: './comp-648.component.html',
  styleUrls: ['./comp-648.component.css']
})
export class Comp648Component implements OnInit {

  constructor(private _service: Service648Service) { }

  ngOnInit() {
  }

}
