import { Component, OnInit } from '@angular/core';
import { Service290Service } from '../../services/service-290.service';

@Component({
  selector: 'app-comp-290',
  templateUrl: './comp-290.component.html',
  styleUrls: ['./comp-290.component.css']
})
export class Comp290Component implements OnInit {

  constructor(private _service: Service290Service) { }

  ngOnInit() {
  }

}
