import { Component, OnInit } from '@angular/core';
import { Service545Service } from '../../services/service-545.service';

@Component({
  selector: 'app-comp-545',
  templateUrl: './comp-545.component.html',
  styleUrls: ['./comp-545.component.css']
})
export class Comp545Component implements OnInit {

  constructor(private _service: Service545Service) { }

  ngOnInit() {
  }

}
