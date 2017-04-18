import { Component, OnInit } from '@angular/core';
import { Service167Service } from '../../services/service-167.service';

@Component({
  selector: 'app-comp-167',
  templateUrl: './comp-167.component.html',
  styleUrls: ['./comp-167.component.css']
})
export class Comp167Component implements OnInit {

  constructor(private _service: Service167Service) { }

  ngOnInit() {
  }

}
