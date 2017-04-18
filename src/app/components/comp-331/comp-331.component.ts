import { Component, OnInit } from '@angular/core';
import { Service331Service } from '../../services/service-331.service';

@Component({
  selector: 'app-comp-331',
  templateUrl: './comp-331.component.html',
  styleUrls: ['./comp-331.component.css']
})
export class Comp331Component implements OnInit {

  constructor(private _service: Service331Service) { }

  ngOnInit() {
  }

}
