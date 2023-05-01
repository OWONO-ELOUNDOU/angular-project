import { Component } from "@angular/core";
//import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'; 

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent {

    facebookIcon = 'assets/Images/icon/facebook.svg';
    instagramIcon = 'assets/Images/icon/instagram.svg';
    twitterIcon = 'assets/Images/icon/twitter.svg';
    dribbbleIcon = 'assets/Images/icon/dribbble.svg';
    youtubeIcon = 'assets/Images/icon/youtube.svg';
    LogoFooterImg: string = 'assets/Images/icon/logo-footer.png';
    //faYoutube = faYoutubeSquare;

}