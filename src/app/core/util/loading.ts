import { LoadingController } from "@ionic/angular";

export async function LoadingOnDidDismiss(loading: LoadingController) {
    await loading.dismiss();
}

export async function LoadingOn(loading: LoadingController) {
  const createLoading = await loading.create({
    message: "Aguarde..."
  });
  await createLoading.present();
}
