import { Component, OnInit } from '@angular/core';
import { Service479Service } from '../../services/service-479.service';

@Component({
  selector: 'app-comp-479',
  templateUrl: './comp-479.component.html',
  styleUrls: ['./comp-479.component.css']
})
export class Comp479Component implements OnInit {

  constructor(private _service: Service479Service) { }

  ngOnInit() {
  }

}
