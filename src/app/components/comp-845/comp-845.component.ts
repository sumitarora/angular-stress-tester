import { Component, OnInit } from '@angular/core';
import { Service845Service } from '../../services/service-845.service';

@Component({
  selector: 'app-comp-845',
  templateUrl: './comp-845.component.html',
  styleUrls: ['./comp-845.component.css']
})
export class Comp845Component implements OnInit {

  constructor(private _service: Service845Service) { }

  ngOnInit() {
  }

}
