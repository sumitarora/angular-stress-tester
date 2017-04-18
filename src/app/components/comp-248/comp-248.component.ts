import { Component, OnInit } from '@angular/core';
import { Service248Service } from '../../services/service-248.service';

@Component({
  selector: 'app-comp-248',
  templateUrl: './comp-248.component.html',
  styleUrls: ['./comp-248.component.css']
})
export class Comp248Component implements OnInit {

  constructor(private _service: Service248Service) { }

  ngOnInit() {
  }

}
