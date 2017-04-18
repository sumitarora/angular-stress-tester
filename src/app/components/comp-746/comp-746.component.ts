import { Component, OnInit } from '@angular/core';
import { Service746Service } from '../../services/service-746.service';

@Component({
  selector: 'app-comp-746',
  templateUrl: './comp-746.component.html',
  styleUrls: ['./comp-746.component.css']
})
export class Comp746Component implements OnInit {

  constructor(private _service: Service746Service) { }

  ngOnInit() {
  }

}
