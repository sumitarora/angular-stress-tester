import { Component, OnInit } from '@angular/core';
import { Service320Service } from '../../services/service-320.service';

@Component({
  selector: 'app-comp-320',
  templateUrl: './comp-320.component.html',
  styleUrls: ['./comp-320.component.css']
})
export class Comp320Component implements OnInit {

  constructor(private _service: Service320Service) { }

  ngOnInit() {
  }

}
