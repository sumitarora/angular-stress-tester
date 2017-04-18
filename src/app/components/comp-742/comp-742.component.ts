import { Component, OnInit } from '@angular/core';
import { Service742Service } from '../../services/service-742.service';

@Component({
  selector: 'app-comp-742',
  templateUrl: './comp-742.component.html',
  styleUrls: ['./comp-742.component.css']
})
export class Comp742Component implements OnInit {

  constructor(private _service: Service742Service) { }

  ngOnInit() {
  }

}
