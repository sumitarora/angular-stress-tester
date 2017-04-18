import { Component, OnInit } from '@angular/core';
import { Service221Service } from '../../services/service-221.service';

@Component({
  selector: 'app-comp-221',
  templateUrl: './comp-221.component.html',
  styleUrls: ['./comp-221.component.css']
})
export class Comp221Component implements OnInit {

  constructor(private _service: Service221Service) { }

  ngOnInit() {
  }

}
