import { Component, OnInit } from '@angular/core';
import { Service893Service } from '../../services/service-893.service';

@Component({
  selector: 'app-comp-893',
  templateUrl: './comp-893.component.html',
  styleUrls: ['./comp-893.component.css']
})
export class Comp893Component implements OnInit {

  constructor(private _service: Service893Service) { }

  ngOnInit() {
  }

}
