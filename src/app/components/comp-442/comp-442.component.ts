import { Component, OnInit } from '@angular/core';
import { Service442Service } from '../../services/service-442.service';

@Component({
  selector: 'app-comp-442',
  templateUrl: './comp-442.component.html',
  styleUrls: ['./comp-442.component.css']
})
export class Comp442Component implements OnInit {

  constructor(private _service: Service442Service) { }

  ngOnInit() {
  }

}
