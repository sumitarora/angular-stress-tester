import { Component, OnInit } from '@angular/core';
import { Service77Service } from '../../services/service-77.service';

@Component({
  selector: 'app-comp-77',
  templateUrl: './comp-77.component.html',
  styleUrls: ['./comp-77.component.css']
})
export class Comp77Component implements OnInit {

  constructor(private _service: Service77Service) { }

  ngOnInit() {
  }

}
