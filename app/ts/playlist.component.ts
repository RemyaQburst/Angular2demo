import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
	selector: 'playlist',
	templateUrl:'app/ts/playlist.component.html',
	inputs:['videos']
})
export class PlaylistComponent {
	ClickMethod(vid: Video )
    {
        alert("Playing video : \n" + JSON.stringify(vid));
    }
}