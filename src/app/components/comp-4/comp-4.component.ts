import { Component, OnInit } from '@angular/core';
import { Service4Service } from '../../services/service-4.service';

@Component({
  selector: 'app-comp-4',
  templateUrl: './comp-4.component.html',
  styleUrls: ['./comp-4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _service: Service4Service) { }

  ngOnInit() {
  }

}
