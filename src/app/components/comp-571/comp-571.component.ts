import { Component, OnInit } from '@angular/core';
import { Service571Service } from '../../services/service-571.service';

@Component({
  selector: 'app-comp-571',
  templateUrl: './comp-571.component.html',
  styleUrls: ['./comp-571.component.css']
})
export class Comp571Component implements OnInit {

  constructor(private _service: Service571Service) { }

  ngOnInit() {
  }

}
