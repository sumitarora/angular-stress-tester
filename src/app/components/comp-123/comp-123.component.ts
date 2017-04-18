import { Component, OnInit } from '@angular/core';
import { Service123Service } from '../../services/service-123.service';

@Component({
  selector: 'app-comp-123',
  templateUrl: './comp-123.component.html',
  styleUrls: ['./comp-123.component.css']
})
export class Comp123Component implements OnInit {

  constructor(private _service: Service123Service) { }

  ngOnInit() {
  }

}
