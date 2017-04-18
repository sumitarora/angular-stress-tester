import { Component, OnInit } from '@angular/core';
import { Service602Service } from '../../services/service-602.service';

@Component({
  selector: 'app-comp-602',
  templateUrl: './comp-602.component.html',
  styleUrls: ['./comp-602.component.css']
})
export class Comp602Component implements OnInit {

  constructor(private _service: Service602Service) { }

  ngOnInit() {
  }

}
