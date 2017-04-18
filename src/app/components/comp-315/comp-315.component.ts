import { Component, OnInit } from '@angular/core';
import { Service315Service } from '../../services/service-315.service';

@Component({
  selector: 'app-comp-315',
  templateUrl: './comp-315.component.html',
  styleUrls: ['./comp-315.component.css']
})
export class Comp315Component implements OnInit {

  constructor(private _service: Service315Service) { }

  ngOnInit() {
  }

}
