import { Component, OnInit } from '@angular/core';
import { Service651Service } from '../../services/service-651.service';

@Component({
  selector: 'app-comp-651',
  templateUrl: './comp-651.component.html',
  styleUrls: ['./comp-651.component.css']
})
export class Comp651Component implements OnInit {

  constructor(private _service: Service651Service) { }

  ngOnInit() {
  }

}
