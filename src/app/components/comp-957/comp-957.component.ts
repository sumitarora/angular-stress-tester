import { Component, OnInit } from '@angular/core';
import { Service957Service } from '../../services/service-957.service';

@Component({
  selector: 'app-comp-957',
  templateUrl: './comp-957.component.html',
  styleUrls: ['./comp-957.component.css']
})
export class Comp957Component implements OnInit {

  constructor(private _service: Service957Service) { }

  ngOnInit() {
  }

}
