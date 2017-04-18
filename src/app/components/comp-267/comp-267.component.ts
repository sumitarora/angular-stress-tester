import { Component, OnInit } from '@angular/core';
import { Service267Service } from '../../services/service-267.service';

@Component({
  selector: 'app-comp-267',
  templateUrl: './comp-267.component.html',
  styleUrls: ['./comp-267.component.css']
})
export class Comp267Component implements OnInit {

  constructor(private _service: Service267Service) { }

  ngOnInit() {
  }

}
