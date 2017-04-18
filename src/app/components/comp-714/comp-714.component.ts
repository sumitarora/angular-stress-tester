import { Component, OnInit } from '@angular/core';
import { Service714Service } from '../../services/service-714.service';

@Component({
  selector: 'app-comp-714',
  templateUrl: './comp-714.component.html',
  styleUrls: ['./comp-714.component.css']
})
export class Comp714Component implements OnInit {

  constructor(private _service: Service714Service) { }

  ngOnInit() {
  }

}
