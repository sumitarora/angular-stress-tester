import { Component, OnInit } from '@angular/core';
import { Service422Service } from '../../services/service-422.service';

@Component({
  selector: 'app-comp-422',
  templateUrl: './comp-422.component.html',
  styleUrls: ['./comp-422.component.css']
})
export class Comp422Component implements OnInit {

  constructor(private _service: Service422Service) { }

  ngOnInit() {
  }

}
