import { Component, OnInit } from '@angular/core';
import { Service811Service } from '../../services/service-811.service';

@Component({
  selector: 'app-comp-811',
  templateUrl: './comp-811.component.html',
  styleUrls: ['./comp-811.component.css']
})
export class Comp811Component implements OnInit {

  constructor(private _service: Service811Service) { }

  ngOnInit() {
  }

}
