import { Component, OnInit } from '@angular/core';
import { Service930Service } from '../../services/service-930.service';

@Component({
  selector: 'app-comp-930',
  templateUrl: './comp-930.component.html',
  styleUrls: ['./comp-930.component.css']
})
export class Comp930Component implements OnInit {

  constructor(private _service: Service930Service) { }

  ngOnInit() {
  }

}
