import { Component, OnInit } from '@angular/core';
import { Service562Service } from '../../services/service-562.service';

@Component({
  selector: 'app-comp-562',
  templateUrl: './comp-562.component.html',
  styleUrls: ['./comp-562.component.css']
})
export class Comp562Component implements OnInit {

  constructor(private _service: Service562Service) { }

  ngOnInit() {
  }

}
