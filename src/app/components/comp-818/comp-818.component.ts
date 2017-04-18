import { Component, OnInit } from '@angular/core';
import { Service818Service } from '../../services/service-818.service';

@Component({
  selector: 'app-comp-818',
  templateUrl: './comp-818.component.html',
  styleUrls: ['./comp-818.component.css']
})
export class Comp818Component implements OnInit {

  constructor(private _service: Service818Service) { }

  ngOnInit() {
  }

}
