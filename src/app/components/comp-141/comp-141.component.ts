import { Component, OnInit } from '@angular/core';
import { Service141Service } from '../../services/service-141.service';

@Component({
  selector: 'app-comp-141',
  templateUrl: './comp-141.component.html',
  styleUrls: ['./comp-141.component.css']
})
export class Comp141Component implements OnInit {

  constructor(private _service: Service141Service) { }

  ngOnInit() {
  }

}
