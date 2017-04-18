import { Component, OnInit } from '@angular/core';
import { Service877Service } from '../../services/service-877.service';

@Component({
  selector: 'app-comp-877',
  templateUrl: './comp-877.component.html',
  styleUrls: ['./comp-877.component.css']
})
export class Comp877Component implements OnInit {

  constructor(private _service: Service877Service) { }

  ngOnInit() {
  }

}
