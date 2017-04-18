import { Component, OnInit } from '@angular/core';
import { Service254Service } from '../../services/service-254.service';

@Component({
  selector: 'app-comp-254',
  templateUrl: './comp-254.component.html',
  styleUrls: ['./comp-254.component.css']
})
export class Comp254Component implements OnInit {

  constructor(private _service: Service254Service) { }

  ngOnInit() {
  }

}
