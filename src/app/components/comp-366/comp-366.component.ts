import { Component, OnInit } from '@angular/core';
import { Service366Service } from '../../services/service-366.service';

@Component({
  selector: 'app-comp-366',
  templateUrl: './comp-366.component.html',
  styleUrls: ['./comp-366.component.css']
})
export class Comp366Component implements OnInit {

  constructor(private _service: Service366Service) { }

  ngOnInit() {
  }

}
