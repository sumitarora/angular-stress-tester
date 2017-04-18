import { Component, OnInit } from '@angular/core';
import { Service176Service } from '../../services/service-176.service';

@Component({
  selector: 'app-comp-176',
  templateUrl: './comp-176.component.html',
  styleUrls: ['./comp-176.component.css']
})
export class Comp176Component implements OnInit {

  constructor(private _service: Service176Service) { }

  ngOnInit() {
  }

}
