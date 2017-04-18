import { Component, OnInit } from '@angular/core';
import { Service939Service } from '../../services/service-939.service';

@Component({
  selector: 'app-comp-939',
  templateUrl: './comp-939.component.html',
  styleUrls: ['./comp-939.component.css']
})
export class Comp939Component implements OnInit {

  constructor(private _service: Service939Service) { }

  ngOnInit() {
  }

}
