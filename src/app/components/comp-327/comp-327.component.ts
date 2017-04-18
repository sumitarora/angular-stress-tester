import { Component, OnInit } from '@angular/core';
import { Service327Service } from '../../services/service-327.service';

@Component({
  selector: 'app-comp-327',
  templateUrl: './comp-327.component.html',
  styleUrls: ['./comp-327.component.css']
})
export class Comp327Component implements OnInit {

  constructor(private _service: Service327Service) { }

  ngOnInit() {
  }

}
