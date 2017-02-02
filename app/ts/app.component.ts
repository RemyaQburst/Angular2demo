import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
	mainHeading = Config.MainHeading;
	videos:Array<Video>;
	
	constructor(){
		this.videos = [
			new Video(1,"Angular2","f8qBeaGe2S4","Angular2 tutorial video")
		]
	}
}