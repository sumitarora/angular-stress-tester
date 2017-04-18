import { Component, OnInit } from '@angular/core';
import { Service440Service } from '../../services/service-440.service';

@Component({
  selector: 'app-comp-440',
  templateUrl: './comp-440.component.html',
  styleUrls: ['./comp-440.component.css']
})
export class Comp440Component implements OnInit {

  constructor(private _service: Service440Service) { }

  ngOnInit() {
  }

}
