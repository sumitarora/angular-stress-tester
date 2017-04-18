import { Component, OnInit } from '@angular/core';
import { Service371Service } from '../../services/service-371.service';

@Component({
  selector: 'app-comp-371',
  templateUrl: './comp-371.component.html',
  styleUrls: ['./comp-371.component.css']
})
export class Comp371Component implements OnInit {

  constructor(private _service: Service371Service) { }

  ngOnInit() {
  }

}
