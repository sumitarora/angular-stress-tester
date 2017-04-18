import { Component, OnInit } from '@angular/core';
import { Service28Service } from '../../services/service-28.service';

@Component({
  selector: 'app-comp-28',
  templateUrl: './comp-28.component.html',
  styleUrls: ['./comp-28.component.css']
})
export class Comp28Component implements OnInit {

  constructor(private _service: Service28Service) { }

  ngOnInit() {
  }

}
