import { Component, OnInit } from '@angular/core';
import { Service73Service } from '../../services/service-73.service';

@Component({
  selector: 'app-comp-73',
  templateUrl: './comp-73.component.html',
  styleUrls: ['./comp-73.component.css']
})
export class Comp73Component implements OnInit {

  constructor(private _service: Service73Service) { }

  ngOnInit() {
  }

}
