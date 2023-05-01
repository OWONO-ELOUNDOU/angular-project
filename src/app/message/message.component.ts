import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  isOpen: boolean | undefined = false;

  constructor(
    private bnIdle: BnNgIdleService
  ) { }

  ngOnInit(): void {
    this.bnIdle.startWatching(10).subscribe((res) => {
      if(res) {
        this.isOpen = !this.isOpen
      }
    })
  }

}
