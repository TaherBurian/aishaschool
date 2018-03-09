import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController , NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
/**
 * Generated class for the NewsadminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsadmin',
  templateUrl: 'newsadmin.html',
})
export class NewsadminPage {

  headertext: any;
  longtext: any;
  shorttext: any;
  image: any;
  imgupload: any;
  _upload_img: any;



  constructor(public navCtrl: NavController, public loadingController: LoadingController, private camera: Camera, public navParams: NavParams,public alertCtrl: AlertController) {


  }

  //produce blob from string
     b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;

        var byteCharacters = atob(b64Data);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);

          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }

          var byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
      }


  options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,  //PHOTOLIBRARY
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


  getImage(){
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
   this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.imgupload = base64Image;
    var base64_imgString = base64Image;
    var contentType = base64_imgString.substring(0,23);
    var iCont = contentType.indexOf(";base64");
    contentType = contentType.substring(5,iCont);

    var b64Data = base64_imgString.substring(iCont+8);

    this._upload_img = this.b64toBlob(b64Data, contentType, 0);
   }, (err) => {
    // Handle error
   });


      /*    this.camera.getPicture(this.options).then((imageData) => {
         // imageData is either a base64 encoded string or a file URI
         // If it's base64:
         let base64Image = 'data:image/jpeg;base64,' + imageData;

         this.imgupload = base64Image;
         var base64_imgString = base64Image;
         var contentType = base64_imgString.substring(0,23);
         var iCont = contentType.indexOf(";base64");
         contentType = contentType.substring(5,iCont);

         var b64Data = base64_imgString.substring(iCont+8);

         this._upload_img = this.b64toBlob(b64Data, contentType, 0);
        }, (err) => {
         // Handle error
       });*/


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsadminPage');
  }

  firebaseupload(){

    let loader = this.loadingController.create({
      content: "تحميل..."
    });
    loader.present();

      var storage = firebase.storage();

    // Create a storage reference from our storage service
      var storageRef = storage.ref();

      var timestamp = Date.now();
    // Create a reference to 'images/mountains.jpg'
    var ref = storageRef.child('news' + timestamp + '.jpg');


    //necessary because of async response
    var alertc = this.alertCtrl;
    var headertxt = this.headertext;
    //cat: cat,
  //  longtext: this.longtext,
    var shorttxt = this.shorttext;
    var longtxt = this.longtext;

     ref.put(this._upload_img).then(function(snapshot) {
      //alert("upload successful");
       var downloadURL_image = snapshot.downloadURL;

          firebase.database().ref('/news').push({
            header: headertxt,
            //cat: cat,
          //  longtext: this.longtext,
            shorttext : shorttxt,
            longtext : longtxt,
             img: downloadURL_image

          }).then(function() {

            loader.dismiss();
            let alert = alertc.create({
                title: 'تحميل',
                subTitle: 'تم التحميل بنجاح',
                message:  '',
                buttons: ['موافق']
                });
                  alert.present();
          });


     });

  }

}
