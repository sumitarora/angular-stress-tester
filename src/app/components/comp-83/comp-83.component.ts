import { Component, OnInit } from '@angular/core';
import { Service83Service } from '../../services/service-83.service';

@Component({
  selector: 'app-comp-83',
  templateUrl: './comp-83.component.html',
  styleUrls: ['./comp-83.component.css']
})
export class Comp83Component implements OnInit {

  constructor(private _service: Service83Service) { }

  ngOnInit() {
  }

}
