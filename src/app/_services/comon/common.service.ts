import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Injectable({
	providedIn: 'root'
})
export class CommonService {

	constructor(
		public loadingController: LoadingController,
		public toastController: ToastController
	) {
		defineCustomElements(window)
	}

	// show loading
	showLoading() {
		this.loadingController.create({
			spinner: "circles",
			cssClass: 'app-loading'
		}).then(res => {
			res.present()
		})
	}

	// hide loading
	hideLoading() {
		this.loadingController.dismiss()
	}

	// device default toast
	showToast(text: string = '', duration: any = 'short') {
		(async () => {
			const { Toast } = Plugins;
			await Toast.show({
				duration: duration,
				text: text
			});
		})()
	}

	// ionic toast
	showIonicToast(data: Object): Promise<HTMLIonToastElement> {
		return this.toastController.create(data)
	}

	// click image
	clickImg(quality: number = 90, allowEditing: boolean = false): Promise<string> {
		return (async () => {
			const { Camera } = Plugins;
			const image = await Camera.getPhoto({
				quality: quality,
				allowEditing: allowEditing,
				resultType: CameraResultType.Uri,
				source: CameraSource.Camera
			});
			var newImageUrlOrg: string = image.webPath;
			return newImageUrlOrg
		})()
	}
}
