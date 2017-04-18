import { Component, OnInit } from '@angular/core';
import { Service406Service } from '../../services/service-406.service';

@Component({
  selector: 'app-comp-406',
  templateUrl: './comp-406.component.html',
  styleUrls: ['./comp-406.component.css']
})
export class Comp406Component implements OnInit {

  constructor(private _service: Service406Service) { }

  ngOnInit() {
  }

}
