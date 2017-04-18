import { Component, OnInit } from '@angular/core';
import { Service901Service } from '../../services/service-901.service';

@Component({
  selector: 'app-comp-901',
  templateUrl: './comp-901.component.html',
  styleUrls: ['./comp-901.component.css']
})
export class Comp901Component implements OnInit {

  constructor(private _service: Service901Service) { }

  ngOnInit() {
  }

}
