import { Component, OnInit } from '@angular/core';
import { Service411Service } from '../../services/service-411.service';

@Component({
  selector: 'app-comp-411',
  templateUrl: './comp-411.component.html',
  styleUrls: ['./comp-411.component.css']
})
export class Comp411Component implements OnInit {

  constructor(private _service: Service411Service) { }

  ngOnInit() {
  }

}
