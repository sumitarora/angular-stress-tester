import { Component, OnInit } from '@angular/core';
import { Service308Service } from '../../services/service-308.service';

@Component({
  selector: 'app-comp-308',
  templateUrl: './comp-308.component.html',
  styleUrls: ['./comp-308.component.css']
})
export class Comp308Component implements OnInit {

  constructor(private _service: Service308Service) { }

  ngOnInit() {
  }

}
