import { Component, OnInit } from '@angular/core';
import { Service790Service } from '../../services/service-790.service';

@Component({
  selector: 'app-comp-790',
  templateUrl: './comp-790.component.html',
  styleUrls: ['./comp-790.component.css']
})
export class Comp790Component implements OnInit {

  constructor(private _service: Service790Service) { }

  ngOnInit() {
  }

}
