import { Component, OnInit } from "@angular/core";
import * as camera from "@nativescript/camera";

@Component({
  selector: "obes-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const isAvailable = camera.isAvailable();
    console.log("camera availability", isAvailable);

    camera.requestPermissions().then(
      function success() {
        // permission request accepted or already granted
        // ... call camera.takePicture here ...
      },
      function failure() {
        // permission request rejected
        // ... tell the user ...
      },
    );
  }
}
