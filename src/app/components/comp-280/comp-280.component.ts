import { Component, OnInit } from '@angular/core';
import { Service280Service } from '../../services/service-280.service';

@Component({
  selector: 'app-comp-280',
  templateUrl: './comp-280.component.html',
  styleUrls: ['./comp-280.component.css']
})
export class Comp280Component implements OnInit {

  constructor(private _service: Service280Service) { }

  ngOnInit() {
  }

}
