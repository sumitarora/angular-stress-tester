import { Component, OnInit } from '@angular/core';
import { Service842Service } from '../../services/service-842.service';

@Component({
  selector: 'app-comp-842',
  templateUrl: './comp-842.component.html',
  styleUrls: ['./comp-842.component.css']
})
export class Comp842Component implements OnInit {

  constructor(private _service: Service842Service) { }

  ngOnInit() {
  }

}
