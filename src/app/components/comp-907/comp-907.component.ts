import { Component, OnInit } from '@angular/core';
import { Service907Service } from '../../services/service-907.service';

@Component({
  selector: 'app-comp-907',
  templateUrl: './comp-907.component.html',
  styleUrls: ['./comp-907.component.css']
})
export class Comp907Component implements OnInit {

  constructor(private _service: Service907Service) { }

  ngOnInit() {
  }

}
