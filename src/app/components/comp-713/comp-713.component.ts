import { Component, OnInit } from '@angular/core';
import { Service713Service } from '../../services/service-713.service';

@Component({
  selector: 'app-comp-713',
  templateUrl: './comp-713.component.html',
  styleUrls: ['./comp-713.component.css']
})
export class Comp713Component implements OnInit {

  constructor(private _service: Service713Service) { }

  ngOnInit() {
  }

}
