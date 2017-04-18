import { Component, OnInit } from '@angular/core';
import { Service606Service } from '../../services/service-606.service';

@Component({
  selector: 'app-comp-606',
  templateUrl: './comp-606.component.html',
  styleUrls: ['./comp-606.component.css']
})
export class Comp606Component implements OnInit {

  constructor(private _service: Service606Service) { }

  ngOnInit() {
  }

}
