import { Component, OnInit } from '@angular/core';
import { Service129Service } from '../../services/service-129.service';

@Component({
  selector: 'app-comp-129',
  templateUrl: './comp-129.component.html',
  styleUrls: ['./comp-129.component.css']
})
export class Comp129Component implements OnInit {

  constructor(private _service: Service129Service) { }

  ngOnInit() {
  }

}
