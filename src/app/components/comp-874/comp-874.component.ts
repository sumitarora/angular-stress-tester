import { Component, OnInit } from '@angular/core';
import { Service874Service } from '../../services/service-874.service';

@Component({
  selector: 'app-comp-874',
  templateUrl: './comp-874.component.html',
  styleUrls: ['./comp-874.component.css']
})
export class Comp874Component implements OnInit {

  constructor(private _service: Service874Service) { }

  ngOnInit() {
  }

}
