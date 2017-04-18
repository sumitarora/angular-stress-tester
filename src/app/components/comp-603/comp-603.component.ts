import { Component, OnInit } from '@angular/core';
import { Service603Service } from '../../services/service-603.service';

@Component({
  selector: 'app-comp-603',
  templateUrl: './comp-603.component.html',
  styleUrls: ['./comp-603.component.css']
})
export class Comp603Component implements OnInit {

  constructor(private _service: Service603Service) { }

  ngOnInit() {
  }

}
