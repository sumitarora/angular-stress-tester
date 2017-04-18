import { Component, OnInit } from '@angular/core';
import { Service830Service } from '../../services/service-830.service';

@Component({
  selector: 'app-comp-830',
  templateUrl: './comp-830.component.html',
  styleUrls: ['./comp-830.component.css']
})
export class Comp830Component implements OnInit {

  constructor(private _service: Service830Service) { }

  ngOnInit() {
  }

}
