import { Component, OnInit } from '@angular/core';
import { Service284Service } from '../../services/service-284.service';

@Component({
  selector: 'app-comp-284',
  templateUrl: './comp-284.component.html',
  styleUrls: ['./comp-284.component.css']
})
export class Comp284Component implements OnInit {

  constructor(private _service: Service284Service) { }

  ngOnInit() {
  }

}
