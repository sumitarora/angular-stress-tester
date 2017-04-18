import { Component, OnInit } from '@angular/core';
import { Service633Service } from '../../services/service-633.service';

@Component({
  selector: 'app-comp-633',
  templateUrl: './comp-633.component.html',
  styleUrls: ['./comp-633.component.css']
})
export class Comp633Component implements OnInit {

  constructor(private _service: Service633Service) { }

  ngOnInit() {
  }

}
