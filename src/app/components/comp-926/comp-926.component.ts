import { Component, OnInit } from '@angular/core';
import { Service926Service } from '../../services/service-926.service';

@Component({
  selector: 'app-comp-926',
  templateUrl: './comp-926.component.html',
  styleUrls: ['./comp-926.component.css']
})
export class Comp926Component implements OnInit {

  constructor(private _service: Service926Service) { }

  ngOnInit() {
  }

}
