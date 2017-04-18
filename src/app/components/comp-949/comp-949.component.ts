import { Component, OnInit } from '@angular/core';
import { Service949Service } from '../../services/service-949.service';

@Component({
  selector: 'app-comp-949',
  templateUrl: './comp-949.component.html',
  styleUrls: ['./comp-949.component.css']
})
export class Comp949Component implements OnInit {

  constructor(private _service: Service949Service) { }

  ngOnInit() {
  }

}
