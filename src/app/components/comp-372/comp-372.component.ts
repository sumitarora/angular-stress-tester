import { Component, OnInit } from '@angular/core';
import { Service372Service } from '../../services/service-372.service';

@Component({
  selector: 'app-comp-372',
  templateUrl: './comp-372.component.html',
  styleUrls: ['./comp-372.component.css']
})
export class Comp372Component implements OnInit {

  constructor(private _service: Service372Service) { }

  ngOnInit() {
  }

}
