import { Component, OnInit } from '@angular/core';
import { Service89Service } from '../../services/service-89.service';

@Component({
  selector: 'app-comp-89',
  templateUrl: './comp-89.component.html',
  styleUrls: ['./comp-89.component.css']
})
export class Comp89Component implements OnInit {

  constructor(private _service: Service89Service) { }

  ngOnInit() {
  }

}
