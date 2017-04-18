import { Component, OnInit } from '@angular/core';
import { Service370Service } from '../../services/service-370.service';

@Component({
  selector: 'app-comp-370',
  templateUrl: './comp-370.component.html',
  styleUrls: ['./comp-370.component.css']
})
export class Comp370Component implements OnInit {

  constructor(private _service: Service370Service) { }

  ngOnInit() {
  }

}
