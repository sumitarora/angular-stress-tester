import { Component, OnInit } from '@angular/core';
import { Service533Service } from '../../services/service-533.service';

@Component({
  selector: 'app-comp-533',
  templateUrl: './comp-533.component.html',
  styleUrls: ['./comp-533.component.css']
})
export class Comp533Component implements OnInit {

  constructor(private _service: Service533Service) { }

  ngOnInit() {
  }

}
