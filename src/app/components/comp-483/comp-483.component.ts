import { Component, OnInit } from '@angular/core';
import { Service483Service } from '../../services/service-483.service';

@Component({
  selector: 'app-comp-483',
  templateUrl: './comp-483.component.html',
  styleUrls: ['./comp-483.component.css']
})
export class Comp483Component implements OnInit {

  constructor(private _service: Service483Service) { }

  ngOnInit() {
  }

}
