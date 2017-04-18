import { Component, OnInit } from '@angular/core';
import { Service605Service } from '../../services/service-605.service';

@Component({
  selector: 'app-comp-605',
  templateUrl: './comp-605.component.html',
  styleUrls: ['./comp-605.component.css']
})
export class Comp605Component implements OnInit {

  constructor(private _service: Service605Service) { }

  ngOnInit() {
  }

}
