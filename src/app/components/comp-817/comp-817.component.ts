import { Component, OnInit } from '@angular/core';
import { Service817Service } from '../../services/service-817.service';

@Component({
  selector: 'app-comp-817',
  templateUrl: './comp-817.component.html',
  styleUrls: ['./comp-817.component.css']
})
export class Comp817Component implements OnInit {

  constructor(private _service: Service817Service) { }

  ngOnInit() {
  }

}
