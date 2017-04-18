import { Component, OnInit } from '@angular/core';
import { Service504Service } from '../../services/service-504.service';

@Component({
  selector: 'app-comp-504',
  templateUrl: './comp-504.component.html',
  styleUrls: ['./comp-504.component.css']
})
export class Comp504Component implements OnInit {

  constructor(private _service: Service504Service) { }

  ngOnInit() {
  }

}
