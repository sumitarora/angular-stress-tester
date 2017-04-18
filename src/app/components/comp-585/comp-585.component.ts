import { Component, OnInit } from '@angular/core';
import { Service585Service } from '../../services/service-585.service';

@Component({
  selector: 'app-comp-585',
  templateUrl: './comp-585.component.html',
  styleUrls: ['./comp-585.component.css']
})
export class Comp585Component implements OnInit {

  constructor(private _service: Service585Service) { }

  ngOnInit() {
  }

}
