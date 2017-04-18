import { Component, OnInit } from '@angular/core';
import { Service512Service } from '../../services/service-512.service';

@Component({
  selector: 'app-comp-512',
  templateUrl: './comp-512.component.html',
  styleUrls: ['./comp-512.component.css']
})
export class Comp512Component implements OnInit {

  constructor(private _service: Service512Service) { }

  ngOnInit() {
  }

}
