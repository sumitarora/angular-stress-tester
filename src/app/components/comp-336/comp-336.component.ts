import { Component, OnInit } from '@angular/core';
import { Service336Service } from '../../services/service-336.service';

@Component({
  selector: 'app-comp-336',
  templateUrl: './comp-336.component.html',
  styleUrls: ['./comp-336.component.css']
})
export class Comp336Component implements OnInit {

  constructor(private _service: Service336Service) { }

  ngOnInit() {
  }

}
