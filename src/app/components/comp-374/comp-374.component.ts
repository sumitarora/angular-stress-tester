import { Component, OnInit } from '@angular/core';
import { Service374Service } from '../../services/service-374.service';

@Component({
  selector: 'app-comp-374',
  templateUrl: './comp-374.component.html',
  styleUrls: ['./comp-374.component.css']
})
export class Comp374Component implements OnInit {

  constructor(private _service: Service374Service) { }

  ngOnInit() {
  }

}
