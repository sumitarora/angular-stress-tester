import { Component, OnInit } from '@angular/core';
import { Service5Service } from '../../services/service-5.service';

@Component({
  selector: 'app-comp-5',
  templateUrl: './comp-5.component.html',
  styleUrls: ['./comp-5.component.css']
})
export class Comp5Component implements OnInit {

  constructor(private _service: Service5Service) { }

  ngOnInit() {
  }

}
