import { Component, OnInit } from '@angular/core';
import { Service976Service } from '../../services/service-976.service';

@Component({
  selector: 'app-comp-976',
  templateUrl: './comp-976.component.html',
  styleUrls: ['./comp-976.component.css']
})
export class Comp976Component implements OnInit {

  constructor(private _service: Service976Service) { }

  ngOnInit() {
  }

}
