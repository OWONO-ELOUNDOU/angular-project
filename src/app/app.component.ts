import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Windows 237';
  icon = "assets/Images/icon/logo.png";

  constructor(
    private bnIdle: BnNgIdleService
    ) {  }

  ngOnInit(): void {
    //60 = 1 minute
    this.bnIdle.startWatching(10).subscribe((res) => {
      if (res) {
        // this.router.navigateByUrl('logout');
      }
    });
  }

}
