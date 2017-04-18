import { Component, OnInit } from '@angular/core';
import { Service13Service } from '../../services/service-13.service';

@Component({
  selector: 'app-comp-13',
  templateUrl: './comp-13.component.html',
  styleUrls: ['./comp-13.component.css']
})
export class Comp13Component implements OnInit {

  constructor(private _service: Service13Service) { }

  ngOnInit() {
  }

}
