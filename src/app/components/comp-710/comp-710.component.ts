import { Component, OnInit } from '@angular/core';
import { Service710Service } from '../../services/service-710.service';

@Component({
  selector: 'app-comp-710',
  templateUrl: './comp-710.component.html',
  styleUrls: ['./comp-710.component.css']
})
export class Comp710Component implements OnInit {

  constructor(private _service: Service710Service) { }

  ngOnInit() {
  }

}
