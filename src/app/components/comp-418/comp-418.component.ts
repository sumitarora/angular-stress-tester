import { Component, OnInit } from '@angular/core';
import { Service418Service } from '../../services/service-418.service';

@Component({
  selector: 'app-comp-418',
  templateUrl: './comp-418.component.html',
  styleUrls: ['./comp-418.component.css']
})
export class Comp418Component implements OnInit {

  constructor(private _service: Service418Service) { }

  ngOnInit() {
  }

}
