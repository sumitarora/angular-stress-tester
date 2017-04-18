import { Component, OnInit } from '@angular/core';
import { Service702Service } from '../../services/service-702.service';

@Component({
  selector: 'app-comp-702',
  templateUrl: './comp-702.component.html',
  styleUrls: ['./comp-702.component.css']
})
export class Comp702Component implements OnInit {

  constructor(private _service: Service702Service) { }

  ngOnInit() {
  }

}
