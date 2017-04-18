import { Component, OnInit } from '@angular/core';
import { Service894Service } from '../../services/service-894.service';

@Component({
  selector: 'app-comp-894',
  templateUrl: './comp-894.component.html',
  styleUrls: ['./comp-894.component.css']
})
export class Comp894Component implements OnInit {

  constructor(private _service: Service894Service) { }

  ngOnInit() {
  }

}
