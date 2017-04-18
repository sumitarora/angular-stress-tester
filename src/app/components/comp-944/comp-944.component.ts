import { Component, OnInit } from '@angular/core';
import { Service944Service } from '../../services/service-944.service';

@Component({
  selector: 'app-comp-944',
  templateUrl: './comp-944.component.html',
  styleUrls: ['./comp-944.component.css']
})
export class Comp944Component implements OnInit {

  constructor(private _service: Service944Service) { }

  ngOnInit() {
  }

}
