import { Component, OnInit } from '@angular/core';
import { Service758Service } from '../../services/service-758.service';

@Component({
  selector: 'app-comp-758',
  templateUrl: './comp-758.component.html',
  styleUrls: ['./comp-758.component.css']
})
export class Comp758Component implements OnInit {

  constructor(private _service: Service758Service) { }

  ngOnInit() {
  }

}
