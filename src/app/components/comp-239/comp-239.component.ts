import { Component, OnInit } from '@angular/core';
import { Service239Service } from '../../services/service-239.service';

@Component({
  selector: 'app-comp-239',
  templateUrl: './comp-239.component.html',
  styleUrls: ['./comp-239.component.css']
})
export class Comp239Component implements OnInit {

  constructor(private _service: Service239Service) { }

  ngOnInit() {
  }

}
