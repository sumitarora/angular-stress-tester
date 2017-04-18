import { Component, OnInit } from '@angular/core';
import { Service192Service } from '../../services/service-192.service';

@Component({
  selector: 'app-comp-192',
  templateUrl: './comp-192.component.html',
  styleUrls: ['./comp-192.component.css']
})
export class Comp192Component implements OnInit {

  constructor(private _service: Service192Service) { }

  ngOnInit() {
  }

}
