import { Component, OnInit } from '@angular/core';
import { Service469Service } from '../../services/service-469.service';

@Component({
  selector: 'app-comp-469',
  templateUrl: './comp-469.component.html',
  styleUrls: ['./comp-469.component.css']
})
export class Comp469Component implements OnInit {

  constructor(private _service: Service469Service) { }

  ngOnInit() {
  }

}
