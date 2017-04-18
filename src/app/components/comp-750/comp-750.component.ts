import { Component, OnInit } from '@angular/core';
import { Service750Service } from '../../services/service-750.service';

@Component({
  selector: 'app-comp-750',
  templateUrl: './comp-750.component.html',
  styleUrls: ['./comp-750.component.css']
})
export class Comp750Component implements OnInit {

  constructor(private _service: Service750Service) { }

  ngOnInit() {
  }

}
