<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <IonContent>
     <div id="map">
      </div>
    </IonContent>
  </ion-page>
</template>

<script>
import { IonPage, 
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonContent,
    onIonViewDidEnter,
    IonToolbar } from '@ionic/vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default {
  name: 'Map',
  components: {
    IonPage,
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonContent,
  },

  setup() {
    const map = ref(null);
    const route = useRoute();

    onIonViewDidEnter(() => {
    //enter your private key from Mapbox!
      mapboxgl.accessToken = 'private key ...';
      map.value = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11?optimize=true',
      center: [24.89114972050467, 42.09422796973982],
      zoom: 15,
      attributionControl: false,
    });
    })

    return {map, route}
  }
}
</script>

<style>
#map {
    height: 80vh;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>