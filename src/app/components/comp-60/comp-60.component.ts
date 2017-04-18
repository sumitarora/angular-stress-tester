import { Component, OnInit } from '@angular/core';
import { Service60Service } from '../../services/service-60.service';

@Component({
  selector: 'app-comp-60',
  templateUrl: './comp-60.component.html',
  styleUrls: ['./comp-60.component.css']
})
export class Comp60Component implements OnInit {

  constructor(private _service: Service60Service) { }

  ngOnInit() {
  }

}
