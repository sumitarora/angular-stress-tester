import { Component, OnInit } from '@angular/core';
import { Service684Service } from '../../services/service-684.service';

@Component({
  selector: 'app-comp-684',
  templateUrl: './comp-684.component.html',
  styleUrls: ['./comp-684.component.css']
})
export class Comp684Component implements OnInit {

  constructor(private _service: Service684Service) { }

  ngOnInit() {
  }

}
