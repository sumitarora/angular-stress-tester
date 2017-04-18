import { Component, OnInit } from '@angular/core';
import { Service85Service } from '../../services/service-85.service';

@Component({
  selector: 'app-comp-85',
  templateUrl: './comp-85.component.html',
  styleUrls: ['./comp-85.component.css']
})
export class Comp85Component implements OnInit {

  constructor(private _service: Service85Service) { }

  ngOnInit() {
  }

}
