import { Component, OnInit } from '@angular/core';
import { Service146Service } from '../../services/service-146.service';

@Component({
  selector: 'app-comp-146',
  templateUrl: './comp-146.component.html',
  styleUrls: ['./comp-146.component.css']
})
export class Comp146Component implements OnInit {

  constructor(private _service: Service146Service) { }

  ngOnInit() {
  }

}
